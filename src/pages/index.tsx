import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';

// Mendefinisikan skema validasi menggunakan Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Harap masukkan alamat email yang valid" }),
  password: z.string().min(6, { message: "Password minimal harus 6 karakter" }),
});

// Mendefinisikan tipe data form berdasarkan skema
type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  // Inisialisasi form dengan react-hook-form dan validasi zod
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Menangani pengiriman form
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      // Di sini biasanya Anda akan membuat panggilan API untuk autentikasi pengguna
      console.log("Percobaan login dengan:", data);
      
      // Simulasi penundaan panggilan API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Menangani login yang berhasil (misalnya, redirect ke dashboard)
      alert("Login berhasil! (Ini hanya demo)");
      
    } catch (error) {
      console.error("Login gagal:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
      </Head>
      
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-blue-300">
      <div className="w-full max-w-lg space-y-6 border rounded-2xl shadow-2xl p-10 bg-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-500">Sign in</h1>
            <Link 
              href="/signup" 
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Sign up
            </Link>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-black'>Email</FormLabel>
                    <FormControl>
                      <Input className='border-black text-black'
                        placeholder="Email" 
                        type="email" 
                        disabled={isLoading} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-black'>Password</FormLabel>
                    <FormControl>
                      <Input className='border-black text-black'
                        placeholder="Password" 
                        type="password" 
                        disabled={isLoading} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white" 
                disabled={isLoading}
              >
                {isLoading ? "Sedang masuk..." : "Here we go!"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}