"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function Schedule() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	return (
		<>
			<Button color="primary" onPress={onOpen}>Add Schedule</Button>
			<Modal isOpen={isOpen} onClose={onOpenChange} placement="top-center" size="3xl">
				<ModalContent>
					{(onClose)=>(
						<>
							<ModalHeader className="flex flex-col gap-1">Create Meeting</ModalHeader>
                            <p className="m-6 mt-2">Topic Meeting</p>
							<ModalBody>
								<Input label="Enter topic name" />
                                <div className="flex justify-between mt-4">
                                    <div>Date</div>
                                    <div>Time</div>
                                    <div>Duration</div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker />
                                        </LocalizationProvider>
                                    </div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                            <TimePicker label="Basic time picker" />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <div>Duration</div>
                                </div>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onClick={onClose}>
								Cancel
								</Button>
								<Button color="primary" onPress={onClose}>
								Create
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
