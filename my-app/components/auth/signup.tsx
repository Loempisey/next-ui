"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

const signup = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className={title({ size: "sm" })}>Sign up</h1>
        <Input autoFocus label="Username" variant="bordered" />
        <Input autoFocus label="Email" variant="bordered" type="email"/>
        <Input autoFocus label="Password" variant="bordered" type="password" />
        <div>
          <Button color="primary" className="w-[150px]">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default signup;
