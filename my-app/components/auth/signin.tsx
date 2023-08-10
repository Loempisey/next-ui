"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import {
  Checkbox,
  Link,
  Button,
} from "@nextui-org/react";

const signin = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
	  <h1 className={title({size: 'sm'})}>Sign in</h1>
        <Input
          autoFocus
          label="Username"
          variant="bordered"
        />
        <Input
          autoFocus
          label="Password"
          variant="bordered"
          type="password"
        />
        <div className="flex py-2 px-10 justify-between">
          <Checkbox className="text-small">Remember me</Checkbox>
          <Link color="primary" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
        <div className="text-center">
          <Link color="primary" href="/signup">
            Dont have an account? Register
          </Link>
        </div>
        <div>
          <Button color="primary" className="w-[150px]">Sign in</Button>
        </div>
      </div>
    </>
  );
};

export default signin;
