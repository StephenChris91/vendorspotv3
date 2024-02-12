"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export default function Registerform() {
  // ...

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },

    
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)

    //check that user exists
    //if user exists, check that password is correct
    //if password is correct, redirect to dashboard
    //if password is incorrect, display error message
    //if user does not exist, display error message

    
  }


  return (
    <div className="w-96 p-5 mt-32 flex flex-col m-auto items-start h-auto bg-gray-50 shadow-sm">
      <h1 className="text-3xl font-semibold mb-5">Sign Up</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 min-w-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} className="w-full p-5 rounded-sm"/>
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} className="w-full block p-5 rounded-sm"/>
                </FormControl>
                <FormMessage />
              </FormItem>
              </>
            )}
          />
          <Button type="submit" className="min-w-full bg-blue-600 rounded-sm p-5">Submit</Button>
        </form>
      </Form>
      <p className='mt-3'>Already have an account? <span className="font-bold cursor-pointer" onClick={() => router.push('/login')}>Login</span></p>

    </div>
  )
}
