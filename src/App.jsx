import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row' items-center>

          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>伊藤貴春</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300' >About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='mr-5 hover:text-blue-400 duration-300' >Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>

          <div className='md:w-1/2 flex-grow' mb-16 lg:pr-24 md:pr-16 text-center md:text-left>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode <br />
              私のポートフォリオ</h1>
            <p className='mb-8 leading-relaxed'>こんにちは！ 現在、三鷹の職業訓練で勉強しています。Python、SQL、デジタルテクノロジーの基礎を勉強してます。資格取得にも積極的に励み、ITパスポートと統計検定2級に合格しました！。自身が作ったものを公開してますのでぜひ見てください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-1g hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/pc.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>私は、学生時代から数学が好きな科目で、前職では医療機器メーカーでデータアナリストとして勤務しておりました。2025/09/30にて退職し、データサイエンティストとして転職するためにpython SQLの勉強もやってます。よろしくお願いいたします。</p>
            <p>以下に私が作成したものをあげてます。ご興味がありましたらお声がけください。よろしくお願いいたします。</p>
          </div>
          {/*カードのdivタグ*/}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat APP</h2>
                </div>
                <div>
                  <p>ReactとJavaScriptで投稿機能つきのChatアプリ,仕様はReact,JavaScript,html.css firebase,AWS,ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録投稿を実装しています。</p>
                  <a href="#" className='mt-3 text-green-500 item-center'>もっと見る</a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>AI Finance technology</h2>
                </div>
                <div>
                  <p>AIを使った使った株やビットコインのデータの取得、分析、1か月後の予測アプリです。AIはscikit learnの回帰で予測してます。主にpythonでコーディングを行い、フレームワークはStreamlitを利用してます。株や暗号資産の売買にぜひお役立てください。</p>
                  <a href="#" className='mt-3 text-green-500 item-center'>もっと見る</a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web SIte Dev</h2>
                </div>
                <div>
                  <p>中小企業のWebサイト構築を数件発注してます。商社や税理士事務所、業界団体等多岐にわたります。それぞれの案件は、綿密にヒアリングを行い、クライアントが納得するまで修正を繰り返します。自社サーバを使用することで安価に抑えてます。</p>
                  <a href="#" className='mt-3 text-green-500 item-center'>もっと見る</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/*left side*/}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src=".img/pc.jpg" alt="" className='rounded'/>
          </div>
          {/*right side*/}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width:"60%"}}>60%</div>
              </div>
              <h2>python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "90%" }}>90%</div>
              </div>
              <h3>SQL</h3>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>80%</div>
              </div>
              </div>
          </div>
          </div>
      </section>
    </>
  )
}
export default App
