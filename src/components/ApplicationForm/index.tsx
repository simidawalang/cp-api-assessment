import { useState, useEffect } from "react";
import Card from "../Card";
import { fetchForm, submitForm } from "../../helpers";

const ApplicationForm = () => {
  const [formData, setFormData] = useState<any>({
    data: {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      type: "applicationForm",
      attributes: {
        coverImage: "http://example.com",
        personalInformation: {
          firstName: {
            internalUse: false,
            show: true,
          },
          lastName: {
            internalUse: false,
            show: true,
          },
          emailId: {
            internalUse: false,
            show: true,
          },
          phoneNumber: {
            internalUse: false,
            show: true,
          },
          nationality: {
            internalUse: false,
            show: true,
          },
          currentResidence: {
            internalUse: false,
            show: true,
          },
          idNumber: {
            internalUse: false,
            show: true,
          },
          dateOfBirth: {
            internalUse: false,
            show: true,
          },
          gender: {
            internalUse: false,
            show: true,
          },
          personalQuestions: [
            {
              id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              type: "Paragraph",
              question: "string",
              choices: ["string"],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        },
        profile: {
          education: {
            mandatory: true,
            show: true,
          },
          experience: {
            mandatory: true,
            show: true,
          },
          resume: {
            mandatory: true,
            show: true,
          },
          profileQuestions: [
            {
              id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              type: "Paragraph",
              question: "string",
              choices: ["string"],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        },
        customisedQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
    },
  });

  const fetchData = async () => {
    const res = await fetchForm();
    if (res?.data) {
      setFormData(res.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitData = async () => {
    const res = await submitForm(formData);

    if (res.ok) {
      alert("Form submission successful");
    }
  };

  return (
    <div>
      <Card
        title="Personal Information"
        _key="personalInformation"
        formData={formData}
        setFormData={setFormData}
      />
      <Card
        title="Profile"
        _key="profile"
        formData={formData}
        setFormData={setFormData}
      />
      <Card
        title="Additional Questions"
        _key="customisedQuestions"
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
};

export default ApplicationForm;
