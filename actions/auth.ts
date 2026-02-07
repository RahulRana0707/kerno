'use server'

import { auth } from "@/lib/auth";
import { ServerResponse } from "@/lib/types";
import { APIError } from "better-auth/api";
import { redirect } from "next/navigation";


export async function login(prevState: ServerResponse, formData: FormData): Promise<ServerResponse> {
    const { email, password } = {
        email: formData.get("email") as string,
        password: formData.get("pwd") as string,
    };

    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            },
        });
    } catch (error) {
        if (error instanceof APIError) {
            switch (error.status) {
                case "UNAUTHORIZED":
                    return { success: false, errorMessage: "User not found." };
                case "BAD_REQUEST":
                    return { success: false, errorMessage: "Invalid email." };
                default:
                    return { success: false, errorMessage: "Something went wrong." };
            }
        }
        console.error("sign in with email and password has not worked", error);
    }

    redirect("/");

}



export async function signUp(prevState: ServerResponse, formData: FormData): Promise<ServerResponse> {
    const { email, name, password } = {
        email: formData.get("email") as string,
        password: formData.get("pwd") as string,
        name: formData.get("name") as string,
    };

    try {
        const response = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });
        console.log("response from sign up ------------->>>>>>>>>>", response);

    } catch (error) {
        if (error instanceof APIError) {

            switch (error.status) {
                case "UNPROCESSABLE_ENTITY":
                    return { success: false, errorMessage: "User already exists." };
                case "BAD_REQUEST":
                    return { success: false, errorMessage: "Invalid email." };
                default:
                    return { success: false, errorMessage: "Something went wrong." };
            }
        }
        console.error("sign up with email and password has not worked", error);
    }

    redirect("/");
}