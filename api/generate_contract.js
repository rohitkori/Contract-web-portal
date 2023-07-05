import { config } from "dotenv"
config()

import { Configuration, OpenAIApi} from "openai"

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))
    

async function fetchEmployeeContract() {
  const response = await openai.createCompletion({
    'model': "text-davinci-003",
    'prompt': `Write an employee job agreement for IIT Jodhpur keeping the following Sections in the document and assign bullet point to every section of the contract. Also assign a proper head and footer for the document.
    Sections to keep in document:
     1.Position:Head of SME, Type: Academic & Research related postion
     2.Compensation: Base compensation, Incentive Bonus
     3.Benefits: Vacation, Benefits Generally, Indemnification Rights
     4.Description of Duties
     5.General Service
     7.	Nondisclosure of Proprietary or Confidential Information and Confidential Communications. 
     8.	Covenant Not to Compete; Nonsolicitation of Employees and Customers. 
     9.	Assignment of Rights
     10.Intellectual Property. 
     11.Documents and Records 
     12.Restricted Activities.
     13.Termination: Termination Without Cause,Termination With Cause., Disability, Death or Retirement,Certain Termination Benefits,No Right to Continuing Employment
     14.Litigation and Regulatory Cooperation. 
     15.No Assignment. 
     16.Severability. 
     17.Reformation of Time, Geographical, and Occupational Limitations. 
     18.Specific Performance
     19.Choice of Forum.
     20.Entire Agreement.  
     21.Assignment; Successors and Assigns, etc
     22.Modification
     23.Section Headings. 
     24.Waiver of Breach
     25.Notices
     26.Counterparts. 
     
    Go over each section step by step and don't move forward until you complete the section point, write each section in detail and strech the document's length. The given document should contain 2000 words

    `,
    max_tokens: 3700
  })
  console.log(response.data.choices[0].text)
}

fetchEmployeeContract()
