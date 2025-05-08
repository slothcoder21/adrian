'use client'

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'nextjs-simple-typewriter';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isChatDisabled, setIsChatDisabled] = useState(false);
    const messagesEndRef = useRef(null);

    // Check if chat is disabled on component mount
    useEffect(() => {
        const checkChatStatus = async () => {
            try {
                const response = await fetch('/api/chat-status');
                const data = await response.json();
                setIsChatDisabled(data.disabled);
            } catch (error) {
                console.error('Error checking chat status:', error);
            }
        };
        
        checkChatStatus();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="flex h-[calc(100vh-6rem)] flex-col bg-[#FFFAE7]">
                {/* Header */}
                <div className="p-6 ">
                    <div className="max-w-5xl mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-black">
                            <Typewriter 
                                words={["Chat with Adrian's AI"]} 
                                loop={true} 
                                cursor={true} 
                                cursorStyle="|" 
                                cursorBlinking={true} 
                                typeSpeed={100} 
                                deleteSpeed={100} 
                                delaySpeed={10000}
                            />
                        </h1>
                        {isChatDisabled && (
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm">
                                API Calls Disabled
                            </div>
                        )}
                    </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 mx-auto w-full max-w-5xl [&::-webkit-scrollbar]:w-2 
                [&::-webkit-scrollbar-track]:bg-white/40 [&::-webkit-scrollbar-thumb]:bg-[#7097A8]/50 [&::-webkit-scrollbar-thumb]:rounded-full 
                hover:[&::-webkit-scrollbar-thumb]:bg-[#7097A8]/70 [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block">
                    {messages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-full max-w-2xl p-8 bg-white/40 backdrop-blur-sm rounded-lg border border-gray-200 shadow-md">
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold text-black">Welcome to Adrian's AI Assistant</h2>
                                    <p className="text-gray-600">I can help you learn more about Adrian's:</p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                                        <li>Technical skills and expertise</li>
                                        <li>Work experience and projects</li>
                                        <li>Education and background</li>
                                        <li>Research interests and achievements</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {messages.map((message, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                        >
                            {message.role === 'assistant' ? (
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-2xl flex-shrink-0">
                                    🤖
                                </div>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-2xl flex-shrink-0">
                                    👤
                                </div>
                            )}
                            <div className={`${message.role === 'assistant' ? 'prose prose-amber prose-headings:text-black prose-strong:text-black max-w-none' : 'text-black font-sans'} max-w-[90%]`}>
                                {message.role === 'assistant' ? (
                                    <ReactMarkdown
                                        components={{
                                            ul: ({node, ...props}) => <ul className="list-disc ml-4 space-y-2" {...props} />,
                                            ol: ({node, ...props}) => <ol className="list-decimal ml-4 space-y-2" {...props} />,
                                            li: ({node, ...props}) => <li className="pl-0.5" {...props} />,
                                            h1: ({node, ...props}) => <h1 className="text-xl font-bold mt-3 mb-1" {...props} />,
                                            h2: ({node, ...props}) => <h2 className="text-lg font-bold mt-3 mb-1" {...props} />,
                                            p: ({node, ...props}) => <p className="mb-2" {...props} />,
                                            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                                            strong: ({node, ...props}) => <span className="font-bold text-black" {...props} />,
                                        }}
                                    >
                                        {message.content}
                                    </ReactMarkdown>
                                ) : (
                                    message.content
                                )}
                            </div>
                        </motion.div>
                    ))}
                    
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-start gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-2xl flex-shrink-0">
                                🤖
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <div className="p-6 mb-10">
                    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isChatDisabled ? "Chat is disabled to conserve API credits" : "Ask me anything..."}
                                className="flex-1 p-3 bg-white backdrop-blur-sm border border-[#7097A8]/20 rounded-lg focus:outline-none focus:border-[#7097A8] focus:ring-1 focus:ring-[#7097A8]/20 transition-all text-black"
                                disabled={isChatDisabled}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || isChatDisabled}
                                className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatPage;

