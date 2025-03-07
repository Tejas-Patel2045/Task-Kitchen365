'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/Auth/LoginForm';

export default function LoginPage() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/products');
        }
    }, [isAuthenticated, router]);

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <LoginForm />
        </div>
    );
}