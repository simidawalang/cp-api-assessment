import { useState, useEffect } from "react";
import Card from "../Card";
import { fetchForm, submitForm } from "../../helpers";
import { ImCross } from "react-icons/im";

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

  const [coverImage, setCoverImage] = useState<any>("");

  const submitData = async () => {
    const res = await submitForm(formData);

    if (res.ok) {
      alert("Form submission successful");
    }
  };

  return (
    <div>
      {!!coverImage ? (
        <div className="cover-image__container">
          <img className="cover-image" src={coverImage} alt="selected file" />
          <div className="cover-image__footer">
            <button
              className="delete-question-btn"
              onClick={() => {
                setCoverImage("");
              }}
            >
              <ImCross size={24} />
              Delete &amp; re-upload
            </button>
          </div>
        </div>
      ) : (
        <Card
          title="Upload cover image"
          _key="coverImage"
          formData={formData}
          setFormData={setFormData}
          setCoverImage={setCoverImage}
        />
      )}

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
    </div>
  );
};

export default ApplicationForm;
