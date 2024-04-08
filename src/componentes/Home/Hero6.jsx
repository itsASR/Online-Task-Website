import React from 'react'
import Collapsible from 'react-collapsible';


function Hero6() {
  return ( 
    <>
    <div className="slide8" id='FAQ'>
        <p className='slide8Heading text-center text-6xl font-bold py-10'>Frequently Asked Questions</p>
        <div className='QuestionsDiv w-1/2 mx-auto'>
          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>How does the earning process work on your website?</button>}>
              <p>
                Users can earn money by completing various tasks available on the platform. These tasks may include surveys, watching videos, testing products, participating in quizzes, etc.
              </p>

            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500' >Is it free to join and start earning?</button>}>
              <p>
                Yes, absolutely! Joining our platform and accessing tasks to earn money is completely free.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>How do I get paid for completing tasks?</button>}>
              <p>
                Depending on the task, users can earn either cash, gift cards, or other rewards. Payment methods may vary and can include PayPal, bank transfer, cryptocurrency, or gift card redemption.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>How often can I withdraw my earnings?</button>}>
              <p>
                Users can usually withdraw their earnings once they reach a minimum threshold set by the platform. This threshold may vary depending on the payment method chosen.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>Are there any restrictions on who can join?</button>}>
              <p>
                Typically, users must be of a certain age (usually 18 or older) to participate. Additionally, some tasks may have specific demographic or geographic requirements.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>Is there a limit to how much I can earn?</button>}>
              <p>
                The earning potential varies depending on the number of tasks available and the user's engagement level. Some users may earn more by completing higher-paying tasks or by referring friends to the platform.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>How long does it take to receive payments after withdrawal?</button>}>
              <p>
                Payment processing times may vary depending on the payment method chosen and the platform's policies. Generally, users can expect to receive their payments within a few business days.
              </p>
            </Collapsible>
          </div>

          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>Are the tasks safe and legitimate?</button>}>
              <p>
                Yes, we thoroughly vet all tasks and task providers to ensure they are safe, legitimate, and compliant with our platform's guidelines. Users can feel confident that they are engaging in genuine earning opportunities.              </p>
            </Collapsible>
          </div>
          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>Can I contact support if I encounter any issues?</button>}>
              <p>
                Absolutely! Our support team is available to assist users with any questions, concerns, or technical issues they may encounter while using the platform. Users can typically reach support via email, live chat, or a support ticket system.              </p>
            </Collapsible>
          </div>
          <div className="questonnoDiv pb-3 w-full">
            <Collapsible trigger={<button className='w-full py-3 font-bold text-xl hover:text-green-500'>How can I maximize my earnings on the platform?</button>}>
              <p>
                To maximize earnings, we recommend regularly checking the platform for new tasks, completing tasks accurately and efficiently, and taking advantage of any referral programs or bonuses offered. Additionally, staying engaged with the platform and completing tasks consistently can lead to higher earnings over time.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero6