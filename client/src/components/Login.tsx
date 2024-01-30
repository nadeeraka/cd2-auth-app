"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/utils/schemas";
import { login, signUp } from "@/app/api/users/users.action";
import { useFormik } from "formik";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    console.log("fire");
    console.log(values);
    console.log(actions);
    // api call
    const paylord = {
      username: values.username,
      //   email: values.email,
      password: values.password,
    };
    const result = await login(paylord);
    // const data = JSON.stringify(result);
    console.log(result);
    actions.resetForm();
    if (result) {
      router.push(`/profile?${result}`);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      //   cpassword: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">User Name</Label>
              <Input
                id="username"
                required
                type="text"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
                className={
                  errors.username && touched.username ? "input-error" : ""
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
