
import { buttonVariants } from '@/components/ui/button'

import Link from 'next/link'
const Page = () => {
  return (
    <div className='mb-8 mt-24 text-center max-w-5xl mx-auto'>
      <div className='mb-10 sm:max-w-lg'>
        <h1 className='text-6xl font-bold sm:text-7xl'>Pricing</h1>
        <p className='mt-5 text-gray-600 dark:text-gray-400 sm:text-2xl'>
         Start using Reviewly today and elevate your website to new heights. </p>
      </div>

      <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {['Free', 'Pro'].map((plan) => (
          <div
            key={plan}
            className={`relative rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${plan === 'Pro' ? 'border-2 border-blue-600 shadow-blue-200' : 'border border-gray-200 dark:border-gray-700'}`}>
            {plan === 'Pro' && (
              <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                Upgrade now
              </div>
            )}

            <div className='p-5'>
              <h3 className='my-3 text-center font-display text-3xl font-bold text-gray-900 dark:text-white'>{plan}</h3>
              <p className='text-gray-500 dark:text-gray-400'>For {plan === 'Free' ? 'small side projects.' : 'larger projects with higher needs.'}</p>
              <p className='my-5 font-display text-6xl font-semibold text-gray-900 dark:text-white'>₹{plan === 'Free' ? '0' : '599'}</p>
              <p className='text-gray-500 dark:text-gray-400'>per month</p>
            </div>

            <ul className='my-10 space-y-5 px-8'>
              {plan === 'Free' ? (
                <>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-gray-300 dark:text-gray-600'>-</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Limited to 5 projects
                    </p>
                  </li>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-gray-300 dark:text-gray-600'>-</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Custom feedback forms</p>
                  </li><li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-gray-300 dark:text-gray-600'>-</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Limited feedback storage</p>
                  </li>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-gray-300 dark:text-gray-600'>-</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Standard email support</p>
                  </li>
                </>
              ) : (
                <>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-blue-500'>✔</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Unlimited projects</p>
                  </li>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-blue-500'>✔</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Unlimited feedback storage</p>
                  </li>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-blue-500'>✔</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Priority support and training</p>
                  </li>
                  <li className='flex space-x-5'>
                    <div className='flex-shrink-0'>
                      <span className='h-6 w-6 text-blue-500'>✔</span>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>Everything in Basic plan
                    </p>
                  </li>
                </>
              )}
            </ul>

            <div className='border-t border-gray-200 dark:border-gray-700' />
            <div className='p-5'>

                          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'w-full bg-blue-500 text-white text-center py-2 rounded mt-5',
            })}
            href={plan === 'Free' ? '/sign-up' : '/upgrade'}
            target='_blank'>
            {plan === 'Free' ? 'Sign up' : 'Upgrade now'}
          </Link>


                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;


