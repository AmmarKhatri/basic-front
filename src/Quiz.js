import { useEffect, useState } from "react"
import axios from "axios"
const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  
  export default function Quiz() {
    const [quiz, setQuiz] = useState([])
    async function getQuiz(){
        const response = await axios.get("https://sandbox.practical.me/api/common/quiz?average_meals_day=2&average_snacks_day=3",
        {
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("token") 
            }
        } 
        )
        setQuiz(response.data.data);
        console.log(response.data)
    }
    useEffect(()=>{
        getQuiz()
    })
    return (
        <>
        {
            
                <div className=" text-center">
                <label className="text-base font-semibold text-gray-900">{q.key}</label>
                <p className="text-sm text-gray-500">{q.question}</p>
                <fieldset className="mt-4">
                  <legend className="sr-only">Question Answers</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {q.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={option}
                          name={q.key}
                          type="radio"
                          //defaultChecked={notificationMethod.id === 'email'}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor={option} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
        }
        </>
    )
  }