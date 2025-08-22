import  {signupUser} from "@/lib/auth";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod"

const SignUpSchema = z.object({
    username:z.string().min(3, "Name is required"),
    email: z.string().email("Invalid Email"),
    password:z.string().min(6,"Password should be of minimum 6 char")
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const parsed = SignUpSchema.parse(body)
        const user = await signupUser(parsed)

        return NextResponse.json({ message: "Signup successful",user},{status: 200} )
    } catch (error:unknown) {
        if (error instanceof ZodError) {
      // const formatted = error.issues.map((err: { path: any[]; message: any; }) => ({
      //   path: err.path[0], // 'email', 'password' etc.
      //   message: err.message
      // }))
      return NextResponse.json({ errors: "" }, { status: 422 })
    }

    }
}