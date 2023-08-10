"use client";

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function DocsPage() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	return (
		<>
			<Button color="primary" onPress={onOpen}>Create Meeting</Button>
			<Modal isOpen={isOpen} onClose={onOpenChange} placement="top-center">
				<ModalContent>
					{(onClose)=>(
						<>
							<ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
							<ModalBody>
								<Input autoFocus label="Email" placeholder="Enter your email" variant="bordered" />
								<Input autoFocus label="Password" placeholder="Enter your password" variant="bordered" type="password"/>
								<div  className="flex py-2 px-1 justify-between">
									<Checkbox className="text-small">Remember me</Checkbox>
									<Link color="primary" href="/signin" size="sm">
									Forgot password?
									</Link>
								</div>
								<div className="text-center">
									<Link color="primary" href="#">Dont have an account? Register</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onClick={onClose}>
								Cancel
								</Button>
								<Button color="primary" onPress={onClose}>
								Sign in
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
