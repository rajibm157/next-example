import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { LoginForm } from "@/components/LoginForm";
  import Link from "next/link";
  
  export default function SignInPage() {
    return (
      <main className="flex align-center justify-center self-center mt-16 px-20">
        <Card className="w-[500px] px-8 py-5">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Please login to continue.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="justify-center">
            <p>
              Don&apos;t have an account?
              <Link href={"/signup"} className="text-blue-500">
                {" Register"}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    );
  }
  