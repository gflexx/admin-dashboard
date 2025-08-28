import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Registerform from "./Registerform";
import LoginForm from "./LoginForm";

function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">LOGIN</TabsTrigger>
        <TabsTrigger value="register">REGISTER</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm/>
      </TabsContent>
      <TabsContent value="register">
        <Registerform/>
      </TabsContent>
    </Tabs>
  );
}

export default AuthTabs;
