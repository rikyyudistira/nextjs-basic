import Navigation from './Navigation'
import Head from 'next/head'

const BaseLayout = (props) => (
  <React.Fragment>
    <Head> 
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Default Title</title>
    </Head>
    <div style={{height: '100vh', width: '100%', display: 'flex'}}>
      <div style={{margin: 'auto'}}>
        <Navigation/>
        <div style={{textAlign: 'center'}}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA3lBMVEX///8AAADw8PDz8/MQGSj8/PzCwsLV1dWrq6v5+fno6OjExMTp6emlpaW8vLy/v7+0tLTLy8va2trh4eEXIC/R0dGbm53Y2dwAABgUHCmHh4fKysotLS29v8MlLzwpMz8ADSAAAAhSUlIiIiJFRUVjY2OcnZ99fX1sbGw5OTnh2+Pp5eohKjoLFygAAB0AABA5QU0XFxcODg6IjZV2e4RFTllqcXkbJC8THCM6Q0YjLTcAERyPkpbIxs4aJjY/R1BTV2RjaHENFyxzd4GAgIBaXWIQGy4fIikPExkJEyD34cBnAAAJ1klEQVR4nO2dDVeiTBSAmYFR+dBQ/EhJJSvUktTU6q22sq02//8fegftA2RQMNFB5zlnz9lVcPE5917uDANyHIPBYDAYDAZj10FIvOC3fRDxANl/zs/FbR8HjSDiq+L5+YaPg3rE6mA4qGqkIILnFxs/HJqBg16n06mPrh8ONOgJsItzVra+gYNarV7D3Nze/pcmBNfFBStbM+Cgg1XV61gVaOSIm6ALlog2dlRhU/W7W3Ck+24lsrL1rap2c9xVF24o7n3ZgsNODafg3f3Hw9Jt+f0uW3Bo1/T6zX1TCbA1LlvkNmwfmJX1WvctGXAH8QJGekD0Mq1VNetucaFyw+/nIHGq6tF4CBkq+5iIdq3qGGMp9I771z9gVR1hFLRQze37hzx43FHg8NF6ClOo3JSGYzMr7YcvODRG5q/qTvW58/yaqpZ2vtQrw9rgt0GBzLp1Uxv9LVZ3uo9Qhtfr+H7KIG9YlvU4GhQgv6MnR8ksremTCmPLECzj8LAzNncyG2H4NsEXUe0dWoKAfV3WxuoaP5gS1pst2qBsCMJU1+NzcSeDa30g/e3yy9al1avsdKX/NbD6dDwRZhiHN9VtHw/dwGr92Pq0ZdX3o0VdHT591525Kh+ywFoGHN5PbZXLw20fSgxIjgEuW+WbHivvAcg8gcntLavugeDN8vHHfWVHBzzrRvx7f9xgSRgQ5e0uu+1jiA/ZKkvC4IhsXBgcxLPuPTjMVhiQyMpWYBBiskLA8jAwYmHbRxAfYGLbRxAfmKvgMFfBYa6Cw1wFh7kKDnMVHOYqOMxVcOh3pQVZ2b8RqHclNVZbMhsBtLuSxoC5CoY07kbpKtwkC92upLF1D9a1xtFLyHXtVLvCqt4n0bnKaeG2p9mVODTy+ehcKZmQO9Ds6k/tPZ8vR1avimGnhCl2hcyXKF09kG8dXwDVrrCqyFxl0qF3odgVV+2UbVeR1KtcK/w+NLvSnoSo4opvrLDUn2ZX4vULTsJI4qoV9hxoQ7Mrblqwooir4goZSLmrP3bBisCVfrTSWj2qXcGR4OtKIS6KUhTJDeIUjxepn+U+31YcOyxdZUW1KzS0/OpV4aRNmNcqnPSvgIsM1+zPN1KnFU79fPuqf9L/2rS57HCodsWlhLKPK/kKnBFeBU015QJyfP/U3aBXjhAnfb6tVkDrc4/00lyn21WpLvjkoAzOgPducBnI3k0LoOL85wFwxlmS8Cl+0O0Kvll+cQUSJvDME8jggLBtETi+pAKKzveSIHj/DkkfTg1oYPi6UrnThvdV4tdpXH13nqjh3imUqwzVC7CqfrVdBiku5/mePq6kq29BxblgDOOKT1F9X2+pZ5FdJbArLj2fhT6u8GnvM/F0ezcnoVylqV6sBsfWsb8r1Dh1vyoDn/LbnJ0hYH++YQ/lygw/N7FJHha54qS5b+rrSjxq263m2dV8UxbO1TXdBau2IAft5HJloa8rTrNbzbT37XCuetRc1yWhjRa64s5OnSupif3VjBRQk4TWPJyrR9+PpwHxr5+rWQ8Jgel4VQbFXNKJY4zX6vePvCkUzpVhLt9qi5jdha6wHkcbLoM5HE25BEgtejhXh9dU38aUfVnsims6snBRXBUBaQQZ0tUougu7awD2lrjiT34GLTLwne/MgooJvCkU0lWN6ruf0d8lrvDY+DsLZd+RMLzC4dcCnmYyZL0qP1B9U06aeB3P4YqrHH39zd/Vmd1c8P32fL0JGVfCmOq7nwvEVQdOV+JRhfCqi/SsxdA9XUNIV2VyRaAFidj/JZwjP+1rjssvrpLgc2zzML+Bx5UdeAp5UYjtKr/6IxQ3APluY5crzvzsnHxcie2Tz84KNZbMM8CGyJnt9inJFm9289avHw24edyu7Cl0Gx9XrZ+5Ve3K1eh7XElHfOEEcbJrKvUT3jzOCyOqhzlE5lxpszMc2ZXq7BUy7hllgisNHJB9YFflco3qeRkiB3MzVWrbzg2iK83dg7669vS4OoGcftZvkWb1+CIolwW6hzkk5l1xZ3a4kOYZUPvEFSZi2zkx43U1Le5Nz/Q0Z8cVdjWhe16GhMeVclWwM7OZcaPhOJqbHMg546zw40oRC01Ob3OJCs+pp4Sec+rK6lE9kUzC44rLXBHGzqByADxlOgV+fmPB4aqhimdHQOf4Fmj3SRfaZjmYp3qYQ8TbSbziHoqHc3CI0Gg7H0zh/hw4fUfJEUcytitBMJb/mEUMaEd8rXMaV2VjHLuCRUA7jXZ2CderCS7udA9zgqIuXb7xK2auKB/mBKYZ6VV07OoDF3cjhsMcAuJZlCMQXK+mroZUTyQHJkcax62LL1e/+w0CeshEmIV2Dgpl42knaruNGd3EpR1XwqSzG6XdRkwt32ZFbFe7pAqPfiN7xiV2dXyzS6pwfY8qC7Grf9FF7XaIqm/gix+7pioyaF9/RRMwsyON1Qage802XTBXwWGugsNcBYe5Cg5zFRzmKjjMVXCYq+BAqle3T0G0XAqIgStep+T3l0M/2GgLoKyubH/UipRMLOb5oJzc9nUmKKfi8qNCOXmricgXUvoW//uQiIXtJaKYUxPbjutwKHJhKweMJDVN9R0ARAqZzSciUhLpkM9ApALYaGU3nIhQTye3fw5eAVQB/4qbPCPaJT2WpjBVowsaqU0loqipB/Eq6U603mRy/NGSlQ3YQlJGDf2oSIoQry1BmID2QzLyExPUU9Q8tHo1TEN4t59l21CjTUQxmZLjWqi+yNqPss2/541uS4eRfRnce6rxLVRf8NfG1FU+f/hfOhfN98GDZLofshOU0rOFSxZ2lbeMt4wUQSLCbCrOJd1JaTCqvWNfOLqMTiW77kQUcymZjtmydYCUP+b16NHAut6NXnqtNR53VKn43Uu5GKRVH8a99xfr5XJ8sDZbuKOK5dBvOXypOniuv1++vK7pjAj1Yvxu4QoMgqXU8PmxZ66hNeWT6esdVjVFtMvX8LeTNaKWafV2XdUUsVTN6NLqiShKide7m71QZYMkObtia4qg/tDr0v1UnXWjHORWSURYMBuXh/W9UmUPeHUtbCLi3vPNMIz9qFUuoF4I1T/gkt6sH1r7qAqjycETESl65enSEox9S8AvUFIOeEbkk6nGoSEIxn6VdRe8HuQ6ophTW7fY1P5G1Qwtsaw1RUqi8q87sVXtZ636QcwuvI6IYNY8BbYppoqzl7UUfMeIeOj3BrpYVJmpmoJyPoloF6qPWVDte636ARUS3kREmprKVN5quP+0jL3r1hcA51fW4JI+vewAS+pwVO8NY34FcL24W1OY/bk+KkItiisbcUb8aU1x77lDlx0iAWanY0Rc0jO7dtkhArREEkoZlZkKAkqm6LxA8z/dfrWEWcjhZQAAAABJRU5ErkJggg==" alt=""/>
        </div>
        <div style={{textAlign: 'left'}}>
          {props.children}
        </div>
      </div>
    </div> 
  </React.Fragment>
)

export default BaseLayout