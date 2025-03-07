'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import RegisterForm from '@/components/Auth/RegisterForm';

export default function RegisterPage() {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/products');
        }
    }, [isAuthenticated, router]);

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <RegisterForm />
        </div>
    );
}