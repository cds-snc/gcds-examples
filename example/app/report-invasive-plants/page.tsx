import {Heading} from "@/app/components/client/Heading";
import {TextInput} from "@/app/components/client/forms/TextInput";
import {SubmitButton} from "@/app/components/client/forms/SubmitButton";
import {RadioGroup} from "@/app/components/client/forms/RadioGroup";
import {EmailInput} from "@/app/components/client/forms/EmailInput";
import {Select} from "@/app/components/client/forms/Select";

export default function Page() {
    const radioOptions = [
        {id: "option1", label: "Option 1", value: "option1"},
        {id: "option2", label: "Option 2", value: "option2"},
        {id: "option3", label: "Option 3", value: "option3"}
    ];
    return (
        <main>
            <div>
                <Heading tag="h1">
                    Report invasive plants
                </Heading>
                <form action="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location"/>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                    <button type="submit">Submit</button>
                </form>
                <form action="">
                    <EmailInput name="email" id="email" label="Your email address" required></EmailInput>
                    <TextInput
                        name="name"
                        id="name"
                        hint="Name of the suspected invasive species"
                        label="Suspected Species"></TextInput>
                    <RadioGroup name="radiogroup" id="radiogroup" options={radioOptions} legend="Select at least one option"></RadioGroup>
                    <Select name="selectbox" id="selectbox" label="Select from the following">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <SubmitButton name="submit" id="submit">Submit</SubmitButton>
                </form>
            </div>
        </main>
    );
}
