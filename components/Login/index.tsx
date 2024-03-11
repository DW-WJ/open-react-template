'use client'
// components/LoginForm.tsx
import React, { useState } from 'react';


const LoginForm: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('email', email)
        console.log('password', password)
    }


    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 border-gray-800">
                    <form>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">邮箱 <span className="text-red-600">*</span></label>
                                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-input w-full text-gray-300" placeholder="请输入邮箱" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">密码 <span className="text-red-600">*</span></label>
                                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-input w-full text-gray-300" placeholder="请输入密码" required />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                                <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                                    <span onClick={handleSubmit}>
                                        登录</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;