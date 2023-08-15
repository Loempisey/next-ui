"use client";

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function SignUpPage() {
	const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
	return (
		<>
			<Modal defaultOpen={true} onClose={onOpenChange} placement="top-center">
				<ModalContent>
					{(onClose)=>(
						<>
							<ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
							<ModalBody>
								<Input autoFocus label="Username" placeholder="Enter your username" variant="bordered" />
								<Input autoFocus label="Email" placeholder="Enter your password" variant="bordered" type="password"/>
                <Input autoFocus label="Password" placeholder="Enter your password" variant="bordered" type="password"/>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onClick={onClose}>
								Cancel
								</Button>
								<Button color="primary" onPress={onClose}>
								Sign up
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
