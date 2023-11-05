"use client"
import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
    try {
       await gitHubSignIn();
    } catch (error) {
        if (error.code === "auth/popup-closed-by-user") {
            console.error("Sign-in popup was closed before completing authentication.");
        } else {
            console.error(error.message);
        }
    }
};
 
    const handleSignOut = () => {
    firebaseSignOut();
    };
 
    return (
    <div className="min-h-screen">
        {user ? (
        <div className="m-4 min-h-screen">
            <h1 className="flex justify-center text-5xl font-bold mb-4 mt-6">
            Shopping Portal 🛒
            </h1>
            <p>Signed in as <div class="text-blue-800 font-bold">{user.displayName} ({user.email})</div></p>
            <div className="mt-3">
                <Link className="hover:underline" href="/week8/shopping-list">Go to Shopping Directory</Link>
                <br/>
                <button className="hover:underline mt-3" onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
        ) : (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" bg-blue-200 border-4 border-blue-600 px-20 py-10 rounded-lg">
                <h1 className="text-4xl font-bold m-6 text-center">
                Shopping System 🛒
                </h1>
                <div className="flex justify-center">
                    <button
                    className="text-xl m-3 p-3 rounded-lg bg-emerald-500 hover:bg-yellow-500"
                    onClick={handleSignIn}
                    >
                    Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
        )}
    </div>
   );
 }