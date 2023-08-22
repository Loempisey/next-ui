import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  Tabs,
  Tab,
  Link,
  useDisclosure,
  ModalBody,
  Checkbox
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";

const Form = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState("login");
  return (
    <>
      <Button color="primary" onPress={onOpen} variant="shadow" radius="full">
        Get Started
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onOpenChange}
        className="flex flex-col w-full"
      >
        <ModalContent>
          <>
            <Tabs
              className="overflow-hidden mt-8"
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <ModalBody>
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox className="text-small" size="sm">
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                    <Link href="/dashboard">
                      <Button fullWidth color="primary">
                        Login
                      </Button>
                    </Link>
                </ModalBody>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <ModalBody>
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary">
                      Sign up
                    </Button>
                  </div>
                </ModalBody>
              </Tab>
            </Tabs>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
