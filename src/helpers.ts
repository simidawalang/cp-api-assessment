export const fetchForm = async () => {
  const res = await fetch(
    "http://127.0.0.1:4010/api/843.2386679768505/programs/qui/application-form",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  
  const data = await res.json();
  return data;
};

export const submitForm = async (data: any) => {
  const res = await fetch(
    "http://127.0.0.1:4010/api/843.2386679768505/programs/eos/application-form",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res;
};
