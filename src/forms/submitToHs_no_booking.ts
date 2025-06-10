const THANK_YOU_PAGE = "https://firstpage.hk/thank-you";

const HS_OFFICE_ID = "3832363";
const HS_FORM_ID = "7dc8017c-13cc-4303-94ee-24035fca0c76";
// const HS_FORM_ID = "673ae825-4851-48c8-b512-724e96af70a8";

async function submitToHs(
  data: { get: (arg0: string) => string | undefined },
  source: string
) {
  if (!data.get("website")?.toString().match("^(?!.*t[i1][k]?\\W*t[o0]k).*")) {
    alert("Invalid input.");
    return;
  }

  try {
    const website = data.get("website")?.toString();
    const firstname = data.get("firstName")?.toString();
    const phone = data.get("phone")?.toString();
    const email = data.get("email")?.toString();
    const what_is_your_budget_range = data.get("what_is_your_budget_range")?.toString(); 

    const body = JSON.stringify({
      fields: getHubspotFields({
        email,
        firstname,
        website,
        phone,
        what_is_your_budget_range,

        language_preference: "en",
        lead_reference: window.location.href,
        lead_source_description: source,
      }),

      lead_source: source,
    });

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HS_OFFICE_ID}/${HS_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

    if (res.ok) {
      return (window.location.href = THANK_YOU_PAGE);
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

export { submitToHs };

function getHubspotFields<TData extends Record<string, string | undefined>>(
  data: TData
) {
  return Object.entries(data)
    .map(([name, value]: Array<string | undefined>) => {
      if (!name || value === undefined) {
        return null;
      }
      return {
        name,
        value,
      };
    })
    .filter(Boolean);
}