import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Heading,
  Spacer,
  FormErrorMessage,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from "@chakra-ui/react";

import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../Feature/Slice";



const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onFormSubmit = (data) => console.log(data);

  const { State } = useSelector((state) => state.State);

  const dispatch = useDispatch();

  return (
    <>
      <Box mb="5" p={4} borderWidth="10px" borderRadius="1g">
        <Flex alignItems="center" gap={2}>
          <Link to="">
            <ArrowBackIcon w={6} h={6} />
          </Link>
          <Heading as="h3" size="lg">
            Form
          </Heading>
          <Spacer />
          <Link to="">
            <Button colorScheme="red">
              <AddIcon w={4} h={4} pr={2} />
            </Button>
          </Link>
          <Button colorScheme="blue" onClick={() => dispatch(clearState())}>
            CLEAR STATE
          </Button>
        </Flex>
      </Box>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box mb="5" p={4} style={{ borderRadius: "10px" }}>
          <Stack spacing={4}>
            <FormControl isInvalid={errors.name}>
              <FormLabel color="green">Name</FormLabel>
              <InputGroup>
              <InputLeftAddon children="MR." />
                <Input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name Field is Empty" })}
                />
                 
              </InputGroup>
              <FormErrorMessage>
                {errors?.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.age}>
              <FormLabel color="green">Age</FormLabel>
              <Input
                type="number"
                placeholder="Age"
                {...register("age", {
                  required: { value: true, message: "age field is not empty" },
                  min: {
                    value: 20,

                    message: "age must be greater than 20 ",
                  },
                })}
              />
              <FormErrorMessage>
                {errors?.age && errors.age.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.date_of_birth}>
              <FormLabel color="green">Date of Birth</FormLabel>
              <Input
                type="date"
                {...register("date_of_birth", {
                  required: "Enter Date of Birth",
                })}
              />
              <FormErrorMessage>
                {errors?.date_of_birth && errors.date_of_birth.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.mobile_number}>
              <FormLabel color="green">Mobile Number</FormLabel>
              <InputGroup>
              <InputLeftAddon children="+91" />
                <Input
                  type="number"
                  {...register("mobile_number", {
                    required: "Enter Mobile Number",
                  })}
                />
               
              </InputGroup>
              <FormErrorMessage>
                {errors?.mobile_number && errors.mobile_number.message}
              </FormErrorMessage>
            </FormControl>

            
            <FormControl isInvalid={errors.language}>
              <FormLabel color="green">language</FormLabel>
              <Stack direction={"row"}>
                <Checkbox
                  size="md"
                  colorScheme="blue"
                  value="tamil"
                  {...register("language", { required: "please select" })}
                >
                  Tamil
                </Checkbox>

                <Checkbox
                  size="md"
                  colorScheme="green"
                  value="English"
                  
                  {...register("language", { required: "please select " })}
                >
                  English
                </Checkbox>
                
              </Stack>

              <FormErrorMessage>
                {errors?.name && errors.language.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.gender}>
              <FormLabel color="green">Gender</FormLabel>
              <RadioGroup>
                <Stack direction={"row"}>
                  <Radio
                    size="md"
                    colorScheme="blue"
                    value="male"
                    {...register("gender", {
                      required: "please select Gender",
                    })}
                  >
                    Male
                  </Radio>
                  <Radio
                    size="md"
                    colorScheme="blue"
                    value="female"
                    {...register("gender", {
                      required: "please select Gender",
                    })}
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
              <FormErrorMessage>
                {errors?.gender && errors.gender.message}
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue" type="Submit">
              Submit
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};
export default Form;
