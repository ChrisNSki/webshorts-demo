import React from 'react';

export default function License() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>License</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>WebShorts is released under the MIT License, which is a permissive open source license.</p>
        </div>

        {/* Support Section */}
        <div className='space-y-4'>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6'>
            <div className='flex items-start space-x-3'>
              <div className='text-2xl'>☕</div>
              <div>
                <h2 className='text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-2'>Support WebShorts</h2>
                <p className='text-blue-700 dark:text-blue-300 mb-4'>
                  While WebShorts is free to use under the MIT license, we would love your support! Consider giving us attribution in your projects or buying us a coffee to help keep the project going.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg p-4'>
                    <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>💝 Give Attribution</h3>
                    <p className='text-blue-700 dark:text-blue-300 text-sm mb-2'>While not required, we'd appreciate if you mention WebShorts in your project:</p>
                    <div className='bg-gray-100 dark:bg-gray-700 rounded p-2 text-sm font-mono'>"Built with WebShorts - A React keyboard shortcuts library"</div>
                  </div>

                  <div className='bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg p-4'>
                    <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>☕ Buy Us a Coffee</h3>
                    <p className='text-blue-700 dark:text-blue-300 text-sm mb-3'>Support the development and maintenance of WebShorts:</p>
                    <a
                      href='https://buymeacoffee.com/chrisnarow5'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors duration-200'
                    >
                      <span className='mr-2'>☕</span>
                      Buy a Coffee
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* License Information */}
        <div className='space-y-4'>
          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-green-800 dark:text-green-200 mb-4'>MIT License</h2>
            <p className='text-green-700 dark:text-green-300 mb-4'>Copyright (c) 2025 Ensif LLC</p>

            <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 font-mono text-sm leading-relaxed'>
              <p className='mb-4'>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to
                use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              </p>

              <p className='mb-4'>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>What This License Means</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>✅ You Can:</h3>
              <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
                <li>• Use WebShorts in commercial projects</li>
                <li>• Modify the source code</li>
                <li>• Distribute modified versions</li>
                <li>• Use it in proprietary software</li>
                <li>• Sublicense it under different terms</li>
              </ul>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h3 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>📋 You Must:</h3>
              <ul className='text-gray-700 dark:text-gray-300 text-sm space-y-1'>
                <li>• Include the original copyright notice</li>
                <li>• Include the MIT license text</li>
                <li>• State any changes you made</li>
              </ul>
            </div>
          </div>
        </div>

        {/* License Benefits */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Why MIT License?</h2>

          <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6'>
            <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-4'>Benefits of the MIT License</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='text-center'>
                <div className='text-2xl mb-2'>🚀</div>
                <h4 className='font-semibold text-purple-800 dark:text-purple-200 mb-1'>Simple</h4>
                <p className='text-purple-700 dark:text-purple-300 text-sm'>Short, easy to understand, and widely recognized</p>
              </div>

              <div className='text-center'>
                <div className='text-2xl mb-2'>💼</div>
                <h4 className='font-semibold text-purple-800 dark:text-purple-200 mb-1'>Business Friendly</h4>
                <p className='text-purple-700 dark:text-purple-300 text-sm'>Perfect for commercial use with minimal restrictions</p>
              </div>

              <div className='text-center'>
                <div className='text-2xl mb-2'>🤝</div>
                <h4 className='font-semibold text-purple-800 dark:text-purple-200 mb-1'>Compatible</h4>
                <p className='text-purple-700 dark:text-purple-300 text-sm'>Compatible with most other open source licenses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Additional Information</h2>

          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6'>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold mb-2'>Copyright Holder</h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  WebShorts is developed and maintained by <strong>Ensif LLC</strong>.
                </p>
              </div>

              <div>
                <h3 className='font-semibold mb-2'>License Year</h3>
                <p className='text-gray-600 dark:text-gray-300'>The license is effective from 2025 onwards.</p>
              </div>

              <div>
                <h3 className='font-semibold mb-2'>Questions?</h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  If you have questions about licensing, please reach out through our{' '}
                  <a href='https://github.com/ChrisNSki/webshorts/issues' className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300'>
                    GitHub issues
                  </a>{' '}
                  or{' '}
                  <a href='https://discord.gg/HXg4YxJgfX' className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300'>
                    Discord community
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* License Links */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>License Resources</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>Official Links</h3>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>
                  •{' '}
                  <a href='https://opensource.org/licenses/MIT' className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300' target='_blank' rel='noopener noreferrer'>
                    MIT License on OSI
                  </a>
                </li>
                <li>
                  •{' '}
                  <a href='https://choosealicense.com/licenses/mit/' className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300' target='_blank' rel='noopener noreferrer'>
                    MIT License Guide
                  </a>
                </li>
                <li>
                  •{' '}
                  <a href='https://github.com/ChrisNSki/webshorts/blob/main/LICENSE' className='text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300' target='_blank' rel='noopener noreferrer'>
                    License on GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>Legal Disclaimer</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>This license information is provided for convenience only. For legal purposes, please refer to the actual license text above or the LICENSE file in the repository.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
