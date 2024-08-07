import { EmailInput } from "@/app/components/client/forms/EmailInput";
import { Heading } from "@/app/components/client/Heading";
import { RadioGroup } from "@/app/components/client/forms/RadioGroup";
import { Select } from "@/app/components/client/forms/Select";
import { SubmitButton } from "@/app/components/client/forms/SubmitButton";
import { TextInput } from "@/app/components/client/forms/TextInput";

export default function Page() {
    const radioOptions = [
        { id: "option1", label: "Option 1", value: "option1" },
        { id: "option2", label: "Option 2", value: "option2" },
        { id: "option3", label: "Option 3", value: "option3" }
    ];

    const severityOptions = [
        { value: "severity-low", label: "Low" },
        { value: "severity-moderate", label: "Moderate" },
        { value: "severity-high", label: "High" },
        { value: "severity-severe", label: "Severe" },
        { value: "severity-unknown", label: "Unknown" }
    ];

    return (
        <section>
            <Heading>Report invasive plants</Heading>

            {/* This is the form using GCDS components. TODO: Confirm that it shows up on SSR even without the wrapper */}
            <form action="">
                <EmailInput
                    name="email"
                    id="email"
                    label="Your email address"
                    required
                />
                <TextInput
                    name="name"
                    id="name"
                    hint="Name of the suspected invasive species"
                    label="Suspected Species"
                />
                <RadioGroup
                    name="location"
                    id="locationType"
                    options={radioOptions}
                    legend="Location type"
                    hint="Choose the type of area where the invasive plant was found. Select at least one option."
                />
                <Select
                    name="severity"
                    id="severity"
                    label="Severity of infestation"
                    hint="Choose the observed infestation level to indicate how widespread or dense the plant growth is."
                    defaultValue="Select an option."
                >
                    {severityOptions.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </Select>
                <SubmitButton name="submit" id="submit">Submit</SubmitButton>
            </form>
        </section>
    );
}
