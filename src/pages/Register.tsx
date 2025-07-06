
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 13 && num <= 18;
  }, "Age must be between 13 and 18"),
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  emergencyContact: z.string().min(10, "Emergency contact must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address"),
  tshirtSize: z.string().min(1, "Please select a t-shirt size"),
  allergies: z.string().optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Registration data:", data);
      
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to Halwot Questers! Check your email for confirmation details.",
      });
      
      reset();
      
      // Redirect after successful submission
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again or contact us for help.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Button
            variant="ghost"
            className="mb-4 hover:bg-gray-100"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Join Halwot <span className="text-orange-500">Questers</span>
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below to secure your spot for an unforgettable summer experience!
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="shadow-2xl border border-gray-200 bg-white animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-black">Registration Form</CardTitle>
            <CardDescription className="text-gray-600">
              Please provide accurate information for a smooth registration process
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-black font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="Enter your full name"
                  className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-black font-medium">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  {...register("age")}
                  placeholder="Enter your age (13-18)"
                  className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
              </div>

              {/* Parent/Guardian Name */}
              <div className="space-y-2">
                <Label htmlFor="parentName" className="text-black font-medium">
                  Parent/Guardian Name *
                </Label>
                <Input
                  id="parentName"
                  {...register("parentName")}
                  placeholder="Enter parent or guardian's full name"
                  className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.parentName && (
                  <p className="text-red-500 text-sm">{errors.parentName.message}</p>
                )}
              </div>

              {/* Emergency Contact */}
              <div className="space-y-2">
                <Label htmlFor="emergencyContact" className="text-black font-medium">
                  Emergency Contact *
                </Label>
                <Input
                  id="emergencyContact"
                  {...register("emergencyContact")}
                  placeholder="Phone number and contact person"
                  className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.emergencyContact && (
                  <p className="text-red-500 text-sm">{errors.emergencyContact.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                  className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* T-shirt Size */}
              <div className="space-y-2">
                <Label htmlFor="tshirtSize" className="text-black font-medium">
                  T-shirt Size *
                </Label>
                <Select onValueChange={(value) => setValue("tshirtSize", value)}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                    <SelectValue placeholder="Select your t-shirt size" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="xs">Extra Small (XS)</SelectItem>
                    <SelectItem value="s">Small (S)</SelectItem>
                    <SelectItem value="m">Medium (M)</SelectItem>
                    <SelectItem value="l">Large (L)</SelectItem>
                    <SelectItem value="xl">Extra Large (XL)</SelectItem>
                    <SelectItem value="xxl">2X Large (XXL)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tshirtSize && (
                  <p className="text-red-500 text-sm">{errors.tshirtSize.message}</p>
                )}
              </div>

              {/* Allergies */}
              <div className="space-y-2">
                <Label htmlFor="allergies" className="text-black font-medium">
                  Allergies or Medical Conditions
                </Label>
                <Textarea
                  id="allergies"
                  {...register("allergies")}
                  placeholder="Please list any allergies, medical conditions, or special dietary needs..."
                  className="min-h-[120px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                {isSubmitting ? "Processing Registration..." : "Complete Registration"}
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                By registering, you agree to our terms and conditions. 
                <br />
                Registration fee: $299 (scholarships available upon request)
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
