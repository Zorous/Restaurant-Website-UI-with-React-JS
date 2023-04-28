import React from "react";
import MenuItem from "../components/Menu/MenuItem";
import MostPopularItem from "../components/Menu/MostPopularItem";

function Menu() {
  return (
    <div>
    
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
    <div class="container text-center my-5 pt-5 pb-4">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
            </ol>
        </nav>
    </div>
</div>
      <div class="container-xxl py-5">
      
        <div class="container">
          <div class="row">
            <MenuItem
              category="pizza"
              image="https://imgs.search.brave.com/NOt9Xc6ovqZUjiFCt-t585UbfLEyxgkpCBU8M_695gs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/QVBqQWRnbHluMG1l/LXRJa2szWGpRSGFF/OCZwaWQ9QXBp"
              link="/menu/pizza"
            />
            <MenuItem
              category="Burgers & Sandwitches"
              image="https://foodsguy.com/wp-content/uploads/2021/04/burger-vs-sandwhich.jpg"
              link="/menu/burgers"
            />
            <MenuItem
              category="Boissons & Sauses"
              image="https://imgs.search.brave.com/PzaHqlcl_YbtSAK2sfhjkYQ3Gp-G18CaMrYNJy5ACCY/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/THk0SFhYZW1va2RC/N0IwTlhsVEVBSGFF/NyZwaWQ9QXBp"
              link="/menu/boissons"
            />
            <MenuItem
              category="Assietes"
              image="https://media-cdn.tripadvisor.com/media/photo-s/18/ca/e7/84/notre-assiette-kebab.jpg"
              link="/menu/assietes"
            />
            <MenuItem
              category="Glattes"
              image="https://d397xw3titc834.cloudfront.net/images/original/1/bf/1bf3fce7c10d7fd812a9644b35bff5b6.jpg"
              link="/menu/assietes"
            />
            <MenuItem
              category="Glattes"
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQYGBYZGhwaGhoaGxwhIhsfHBocHSMdJBoiHysiHyEoHSAfIzQkKC0uMTExGyI3PDcwOyswMS4BCwsLDw4PHRERHS4pIik5OTkwMDswMDAuMzMyMDAyMjEyMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMP/AABEIAKYBLwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIAAQj/xABAEAACAQIEAwYDBgUDAwQDAAABAhEDIQAEEjEFQVEGEyJhcYEykaEHFCNCsfBSYsHR4XKCkiQz8RZDsuIVorP/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QALhEAAgICAQMCBAYCAwAAAAAAAQIAAxEhEgQxQSJRMmFxkQUTFIGxwfDxI6HR/9oADAMBAAIRAxEAPwC5wDKrSpgQPPBalWk22/XAPL5jUdI2/XBGnWiAMGlIVp1gLDfEyDFPLiMXKbarDEyJMpxK1xiIWx1qjHTp2LXOK9TMljC48Qzm9hiUAKLCMdOlU5Qbtc4gzmZVBfE+Yqs1kF8UquVQAs5kjrt8sROgnNd5W8KA3wY4L2KRIqZlgbjwkwJOwPX0wZ7NLTZBVWDOx/til9o2aPcKgAhmBJnYqdQ+cfTC194RCxl1UyzmuLUkbulIVQOQwN4rxdKYlYYkmIPMdTgTkswlREV5NQhjq6QTvgVxSzaf5t+uPL2Wt1FhD9h4+U1TwrpDJ3McVzkotQt4SJkHFDP9pqQEh4VDDWN25AD8x8hhb4znwgCFmVVUAsL6ekjmLcr/AKGlwnLu9U1awup/DWbX3qTznkcWHSYBZjrX+pVeo5EACOnDc9Uqk1XXQD8Kt8UdTyX0vg1l6mFzI5kF1W5nkolj6DBFswEYyWAUE30i1t7xPlh1FJGQIKx1XTGHCQRuR7xzxeUnphWy/aGm02Nutvri8vHjpMIAdhJ5/LDNYPeLNangwtnchTqRqMNsGG/+cJPbjMZjLgDRqpkgB1m3kemD1LtKkhmpMLQSpB5TtPr8sWcxxKlVQqdV7+Jf4p3BO3lgjJyhqOqCHeCPYxZ7G1GZNTUi9z4y9iRyibdMHeIspOpAwqaW8I5kC1vXFDhNdqdZ1JApkyJmbjYKBtjvidcSXWCbaDJ63BnFOB44hxapfIP/AHFXMcaqBu7royOLwd74hrcUQEmTIt+xhl4xlqWYpPUKfjopFMxcEDpsfTCT/wCm3pmk9WoGVvERpIItMGfrgRqK7zGz1FbjDARi4Pw0VdNWpfoOV+uGbLkKIFowK4fUUKApHsRi9rxHE4yYgxXOF7Qrl6mC1F5XC3l63LBvIVQVxejTSjjUQ+2Wa7nMapibgjrinxHtEa5Urq8KgTPxEYk+1OgGNMH+LABaoVbDYchgVo2QJt/hyI68n8dpc7RV3ztOlTLBe7k9dRIi/SP64TOKcEq0pJSVH5luP8e+D+Sq1J+Bh7HBrK6z+U/LHL1FtXzH+eYx1P4f0r/CwB+v9TMSMcEY0LiXZihWJIBpPzK7T5rt+mFDjXA62XI7xZU/C4+Fv7HyOH6Orrt0NH2mD1PQ2U7Ox7wZOPFMdMuOVw1EpplKtpAA3OC3DXtffC3w3xGTgwuY1eEe+DCCh3L1NQ8sXqLxEYDZKpHhm+L+XrR5nFpEKmoFEnfHCDUdR9hitRJbxG+JXrAc8dOll60YgGp/IY+UU13bYbeeBfaPtRTyzinpYsQCIAiJI3ne22KO4QZadFjtlxtvvHdqwVKR/Kx8Ri82HiG0SdsD87x+pVUUu8MVAQtQjnPNt7HlytgRxJxWrPUFtbaoB28hYc8QVqDaQqiRqna4tH9vljLawlywJGZ01fs/2nyyqMsGKGmCkvAB0QszPM7De3pgb2sYsRDbTP0+cYRHkEOfCJBM7WO2C9XiZqqlRiCx3GwN8L9Q7WLiHqYbDHvL2Ra5cMBpXnzm2KGc4qO8IXxNaPlvghSz3hqMuikrbGATqi4UH9jFDs5ky9QSJAu3VudvM8sL008m5GFtuC1CtdnOSZAcixmvWBZEvp21vyWeg3OJOzpq1R3VEsXkmLEeZg2X1tywZ7QZtVq8tFL8QoY0mIUKACbTbc2M4GcL4oqBloU2hjfQpY7yBYGQOhw66gYUQFDgZLTvM8azOVZqbhUJ3ZSDPqQOXTFZOL67NUYz1PUycR8Z4ZXYd5Uy9YAy0kH5mBbpcDA3IqFPxMs+kH2IxVxkbJlHVCcgmF/vSDVDG/8ANy88WMvnKf5jUJ8nH6Ri1wviuWoqF7mmRpgg/mJ5m2CQ49kakTT0sFC6oB2O0i+2BqF8GcK6z5gelmqS/Ctb1Vv/AK4lTtKs/wDdrg8vGpPpdRhnJpCWourI0bRI8o3j2wE44FAllF4YEj6z0ti3NlOBDjpVYaaRtxwABu/qzy1BSLHpGI6vaMsI+8VP+Kx8hGFWrxWkysbMwJAE7Xx8yXC6tZR3Ka3Ym0wFAnc+e2GAX95U9NjzGT/8ySVnMEQJnu+YFp8V/XHVbiWYzH4CuHDQpYU22J5mTAHXpiDI/ZhmX0vXqrSFiVSS0dOgw1ZbKvlqQoU1rVFAhdRsB7LJwtbfxU+oE+0JV0nJvlIst2NzIpDTWTUD8I2F7Q3pfliXh3YnMBw1SuqrNxMnSOUxExgx2ezFQGGRrASD0ODNeqgHjMhrEH+3TCqdXyXLax39oSzpQj8RuJvajh1bLIa1OuGoyB4j4hNvRhPTC5/6zriwrR1gC+NIY5bSUNKmV/gKgj5bDHFLszlqia6VJKT/AMqqQD6H+kYNVclzcUO/aCell2cgTLs3xl6pmpVLf6uX0xVOfAnxT88PPbTshmqsEaKgXbu10t/xJMj0OELOcGcSmoBhurgqR6jlgrUkHZnVrWThnIn08WEQI+Q/XFrJcWJ5n54H0+AV+7Z9IOmZUHcWgiN+dv5fPFamWXkR6gjFXpUjRm50PT9JyznJ+sZqWak2xepaCvdsAUiCpAIgbDT0wr0M7Fvrgjk89czzGFShWbr1q4lDj3Y6JqZa437s3/4k7+h+eFIreOf6Y1HK5mbTih2h7MjM/iJC1dj0cTz8x1w70vWH4H+8wet/DAPVX9pT77u0gWY4s5WoEWfzHbzwKy1TvHLHYbYu0ampp5DG1medh3I1ZvzxfWrzwOpsEXUcSUcxOLSsN08wAJnHdC51H2wLR5OLFXPADEyuIRzOcgQN8LPbPIhqWtyFqLGlidwTdY688MnBeEVG8dS07Dn/AIwS/wDw6STpGo8zc/PC9rKylZdVmIUqQnfF5mZQCsjkD1je+NEznZbLgl6yIASWYtaBv1j3xbrcLy2YUiFcU2KW/IRuPLljKdSDLflzMF4nUWdiIMhhNxf29sWsnktdPvzqQvIp0z4g8blTuFkRJtNgcO/G+x2TqKqmmVbVqhCRqvJDfy8vLlgfwDshWr1SKh7uhTIBKncD/wBtJ2F7nltvt35fhRsynEiK/DOH1q9Q0qNNnbnay+pNl98P/ZjsxUybA1X1OfFCSFW0b2LxJ6b+mG3h9BKK91TRUVdgvMdT5+ZvirnMywc6wsEwsGZAG5sNJm0X5XxNgWtTg7/iMVVZYZE5yvAspUbUcumqQbrzEEW23H0wXqUwiyLADYD+gwMo1WBiBsLb8vT9+2JzU20tpPTefbHVdRxXDDJhHpGddpKlRWCmQyswgg7Wn1meXLHsxwyi6lalNagPJwGHkYO3K+OcvUSmCCQCx1GYFzivneLZak6s7Q5QhCFY+EssgQOZUH/b5YbSxX3mBdOPftFjtv2Bod2auXVaTKCSJhIHUH4fUYy/MZFqbQ0owmQb3BjcD3/cY0DtH2nq1C4mcvVUEAX06AYINpBYS28W5ggo/FcxexJZWMDqB/NP0jY74A7KW9IgsCdZTidSmJUlliZW+3WNowa41xVq6fdq8iJCusSJG3mNrE74pcNqaqy1KgU61KzAFyBBJG4kbmSARgf2iqfjuFuA7af+Xn7YGAAfTLEcWwpnXDux9KjFWs5qrfQqWDQJlzMgeQv7HDhwHtlQo0AWoDWHddKQqhRcETyuqnzk+WFsJ/0i1NjBkTv4iOpn9jA/LuwTSSQNWoTyjy26/M4l3Zvilg7Cafk+1FOoU1DQ7KGanqJ0AxuYABuLGDfbBbh/GZLDlMYyrh3B6tRkc/8AbPiJ1Am0ifMz5czg5/6nyyEIhqArKtN9UCxDFgT6m5xntQVbNffuZp1EFM2jA8GaJmM5TCzzY6RG8kYoZskJBsPy8+WE1u1tF3psNYChgQwEEsLGJi2D+V7Q0aoAgnlBF/354n8tjthKiylcYad8Np1A+owRecFRm2Ro5R9Tf5RGIxS+HR4lIkGfpPIjHs7U8S+AG8MSxJ0gbiI8vacKpUQ5IyMfWGdw++8NcP4hrWTPrgL21yWXr0XNQQyoxV7SpAkGd4ttMHF5fCttuXvfCD9pfHCtFqNPU1WpKQoMhfzN6R4Qep8segTPAA7mW6jkYr9neNMKyq3wuIsTvuN5PKPfDdRz1AUl+8aaZLOrAwQQNiJ5FSD5XxnPCMgac1qlVKZSdKF11Fot6ep547q8TqVGU1Xyz6SYDlWgH8sgSR57yBfADV6yVxjz9flAFSO0fkyWSrkd0ilQDsyr6mFMnlvgPxHs5UQ6qE1Fm4Akrz635/LEPZzs3lXY1O+LoDZUkgTyZxfy5bYO57hrJpbKtTRROr8Rr+UXG84qePn/AMjNPX30tpiR7GLlPMkGGlWjYgg8uWCbZxqZEsJIBseRHlixkOP0qqmnmqSuRF3Fxy9Z2j0OKPF+zLVZq5Gvawam5uvoxEx6zgYoVuxmzX+N1sMWKR/nvAoIRQBz3wT4JSLNewGAqHU/0GGI1BRy5P5msPU43RPPGc57Oa6mlfhX9cE8mmldRtgN2eypLAnF3jOb8YprsN8WBnSapmpaBcnDX2b4PBD1Lty8v84V+z1Ia7/EPpjQOGbYC9m8CcB5hJFG2IsxVCAsTsPXa+2PnewSeWFXtjVNRDTJKo/hIFiZMb4CxwMy6rk4iJ227WmrX0CGRSGUssMuoA6d/wCErv5Wtgn2D4mWp1lphhmFBqAiCGUeELoIMwTyg3gTyzbNZjXWqOfzOx9tRgekWwzfZ+q1M7SR7owcEAkT+GxgkESJ5YkVLnY3GF48NjcZ+G8dr53N0UpnQDDOASAQkkid9NoAvc3nGoJQNPap4eSwIG3PebdfzHyxj3ZxxR42lKnZA9VAJ2UJUgTziB8sa/XqmxubgQBO/M9AN58sCZRWpI7wfEc8DtOlBk+fXFfjNIMukALcNI9b++IM5xJUbSagDW2uPOcV+K8SpgC+oRB5z74yXuHFgY3XW3IECWHJFh88fAgBkkg2Eje9sCU4hUcFqNMuBuRH98D++qOfx2amPEIIuCBzHLcEDngKs7EEKcfYRo14ByR/cP5irTpkNKuRI8TibkbFiBby64AdpKheqlUhgAsfGGUeL5XtfyHTFP7kWM96lSeeo29iJOKufpV2+IIUX8oqJJjpBNhvfywxWrg5xgRe+kMmAcmBuKO1GqaThynxlZ5Ey0CIiBZuURcCMLdRtTatZF7G48uV/wDzgzxzOpWI7lfHTuWA+LrIO4EcxfURcYAVgW8RiSSIFtgPIDnyw8o8zPWtlbBG/aN+SyjNTDqk8xDCCBed5G1/a2Bvaamv3qutP4QxXcHY9YEyZM9IwNy9AqmqPDOnzLRO2+174LLwmqQtYLqRr3MnfmOZxTjxJxCWdOtQ5E9/Yaz7Zk+VctQWmCIQQNUAGTq5AmQeZtffqOrcKYsDM6jaSB7XgT0BxLSzlRKoIAgHxBgSDyNuZ6Y7TiXdIqwDuQTe8zab7nfn88Vw3cRummrqiAp4nznsce0v9nMs6NLsVGwUm3LxGbQBPQ7ctz2Z4VkakJUqfisY02ABaLiBKkxvq54TMq9fMVO7pBqjkTpEbSOtgJjfyw553g2YUrWLIKgUEtpjSQNo68ptvtiRW3cjc0OorShBWrZHn3/1I+K9hFeki5SBXpnx94xVnSDuLjXqi40iPaFMVK9CpUV0dWpELUsSE1WBJFgDNjzkRh17MUK8PmX1a1BYoTc+HkehiwwarZb75lnpgvRaqYqiosOAsSACOkAMQbfPBAA3eZFvTqdiJ3CO1ZQDXtuI53j0PT25Yn4hXzVRi9CoHTfutJpsFa4iT4hHMG/nhkyfYzKotOQG7tCoZhJaWZiSvwzJMEiwNsHM9VIClCNTgAAi0AkmRzsTjggBycGDrWxNKf2ia/GKlGlSqKPwyNL0yTIcT1Njv9Lc8IXaOnWzFRq3emHnwgkBQJhY52v740DPZtaterl2JQhyENyGJEeJSSDINm3iOeEzifDa9M1qYCLEEajF38Phne/6jBeYPwyrOHX5iKVPgtZmVURnZjAAF9wPYSRc2vjSOyH2b0VAbN+J5A06vACbBJBlmkxe3QczV+zXhVVarvVJUj8NR5xJb2EAepxpuSoaVgG5Njvy+uKPcfhzLIp45MH5HsLQoS1A92GMtu08uZxweB1abF1RdTAglCJI52IHzw1UASQSRCiIAvJ8+VoticuBvbz5YG1QbeYNlBMzXtB2BrVR3tOqTU/gdVWxvAcMZi+/nfCnmMvmMufxaboeRjf32+uN1UAyAQSN45W6csUM/wALpOjK9MFGIJXTIMRBIA8h8scaxgSCimYVw1ZYDF7j1XUyoNlH1OIuAgSWOwGIab6qhPU/LGrKxj4SwpZc1Ogtihw8ai1RuUsT6XxJxyvCJSXnc+2Gbs72f0pV79W/DfS6gHSw5+LmCOnl1xzOFGTOVSxwII7IOWOo7kyffD9QqACCQJHXAvhNTLPU00UACALAUeG5O/ucd5ysEqhnVhqUAKGBLHaNAvN/IYS/MB2I0KTnDSzxDNsgg3J2AtbCb2gqV2e1Mt3Y7w6bkLP6+Qvh37ymw0AKaiW01Lx5fLn54VgczTrmulLTRVipSIIgXBWNuj+nvDPkYlkrxMVRCpIO43nDJ2JNRczSqos92SxJBiNDSD6rOGf7Q+H5buXrpRC1WfSGB3NQlmldm8IaDEyZwq8C4mtF650kIadRFBIJBcQp6GLifMG+xZRg24NgV1I8txlqfEVzOn/3i5XydjK8r6WIxtydqKL6C5ApsAQ02NpAnz3x+eq9bXU1C159/wDzg7wbtPVoaUeWpDYWlfnuPL5dMCuUupUSEZQ25u+XqZd/FKFeRJG298JvaTtBTNRqdEagDA08+vsMDOCcS+8zDqmogJ4RLTJk7chy6jF/i3BagoGPA6XDIoKuBMiAAynnjNbpsjGAJo1MqNkkmfeE53uU1qCrVJGokQdM6htEKZESb9Isd4WHakXqSZAMsBLBo3Am0cje+FPszkRmJXuSU0FS7KWHiLSVG0mQPD0v5k+P8XzGQKhwj02+BgI06YsRFjHrz92UXgoAg7G5sfeVuK8GI8dMFAGuoBIiZlRN7cht6YDdoc5+GO6o1SpBUVCCFljp3FuYAnqMPv3gPTFRNHdqmpgAdUtBnTA0gDnfc9MU+Nd2aRZWABQ6hHxA9SPI8/LYY7AlObLv2mTV8tUp6WMqbnw7j3Fh88WrMSRYaYkelh+/LDi+WpCmX0SAPCGtqMdBywqrXCzqtJJU/qpHKN/MHlGKkkxFupZ9mDatRUPTDbkON061Du6baWRaXOPERECd4IjoZA54TuK3BKmIvz/t8pwJpVCCCpIIIgg8wZBB5XjB605LmEaw2oFbx2mk0WpVULtGpDFTlpPU9AR/Xpir2gyVMUjNQLGkiYkTsQIuLflwK7LZZq1ZKlwSArRJ1aidxfr6Wne+L32gqihEUAS5aBtYQTbzxGADiCoX/nAUmDuz3aR8tZKaGSCzeIM0SVBMkQCeQH9caW/aPvKFKtWFJFrEAh3UKEgFwNRljBjbmPKcdpLgpkqIYgOzQLDnHlvYT0xD4G56BunFmCO81vNVqQomvQlkIBJUx4TeR6bfLENDP1mpI8yAxuOU2v5bfTCVkENKjWCGV0XBuIaFJ0mwILTPlgl2SzzpSqK7MDp8IMywYR6RzB9cAFgbYittBrODuNJrKxtUCMRJBLKJsJ1j9CD7Y+ZxgFR2cqaSuxi9tJJ9RAJxQ4d/1FJltqABk7GD9Dvf0wI7ffeaVHu6IpuGEP4hqS0WW0yOZtb0wVcHvFrG4CKXE+0n3nMNXQaJC+Em/hAAJ6EgCwt+uDGU4vRzFPusyuoDaoPjTzB5+h5bYzm6nSQVYHnY4Md+iqrJUZiTBGmI3i8m9tsXeog5WItXy9QmmcPy/cCkEfVTAs4k6wBe5iGkybfLDhw+uGAOMn7M8fKHQ10O6nb1HQ+YxoPDMygAZG1IxtO4PQj2seeM/gyuWHbz7iGS4MODaMa0q4kWrYhveAfpz25j/GBeUzGrUNMAECZHikAzbbpi3l64MgcrYYFkkrCCAbgQTc28v7Y+z1GKtKqJIHKCR6nePMziUPgyvkQZEwHINppufLHHCruJx92ofLEeRrBFLSAY540YONOTyn/UxVQGrp/DpOp8SkE6zI0xuBfkZiMNeS49odUcKFbwMpadFoAM7jlz3jzwgcA7T5jMq1PVdQWWf5WEQY6m/vipxHiWbR2bMKHSpaVBgEQZUwDIiSfM4Tcsx3HK1UCanw/MUVqsCgpxFNTMBgqxY9d78x6WnFJCPvH4ZqJqVGIA1AMREnaRzmL4U+F/ec2i1IVUcq6zAJC3keKYnnE7RY4k4kKutMqKiAnTVGpo/NcSBzaBA8rXwM6hAAfMNcYSiiVMw7ESVPh0g8gACV2nl5euKvZzi7EvUkk2DLqgryunS49PTEnE+EhgTqYsFYkEmGBAlbnwmBuOp62RuMZtXC1svBVbFLzbeWI1TfmLHYYjGTmSMYxHni3CKGbWor011hTEg+BmBGpRyaQDqgbeZxjvEezOapoz1KToEIVtW0naDznyt540Pg/aBnoRpFU6Y56gLW1i9vWRGL/2gAHKIpcNrIAjcwbN5WkxiVtKwbqJmHBOEBiQSALnVHQG3lO3vjjOZCpVqLRpJre4AFp6m9vc+XXDXw3h2ijUqXAWFH+oyY9IEzjnhvE3yqqyS1WrJ0XgqFOmD5Aknf8ApjksLHlE0HJ5Y7PdkM0tLU5WlUpkFEN9RSdzsAY3k2m2G7Kcb1hKdZB4vAQhDBo3Ji2/XkMLnBe0TZipUA1qy6ZG+m0WJI8RYERA3k7GGmkyrTK6zrm5BHhb+COkW9pxx94/30YRo8UpkMKMOyRNOYJExYdbG3lgbm8nRz6AVlCmmxkwNjAK8ip226c8XxlaKmnXZlUr+XowUggQOYM/LrgHx/jlAU3RHipuBSvqb0CmZ+s4j1Z7zsDx94sU+0aZOpXR1qaiWAGk+JZgdSABe+B+XzNarmGNPwAxCGLiOnLrHKcFx2azNdjmGpSUDRqsWAW3gMXLdYxRfT3tJai+NkaDsytK2YjmI32lj1xJAx2k7PmEeMZ5WpKFaCZsRcEEgyP6Y8uRD0dLKviuRMEtb4WI3F4npBmSDV/9N5qrUZoQAGz1GCBxv8AGom/xAX9cSZ/PGj3SVdwwLH4gQHuQLbRMdMRjcRs6fjtYucUyjIQngLH4SZBhjaRMgH2jbC1k8qTU0QQwP6eWGbtHxNXACtazC3KBBB3O5UggfAu/KXsZ2aao4JtrgDyH75YIG4qQP2lA3ERk7K5daVKpVvKoFUD+J5VTuJgA2HTyOFTthmddcJM6Fg/6jc/0w88bIpotJBdJcgdYkSY3Am/Iet0an2druxd9IDEkkGeYkAH154XTCt6j2/mF6JkWzm5xKNFcEskYIxJT7P1V3KD/AHetrDqMXU4SwEtU87KY/wAfLFLXBGAZ6GrrunT4mH8wvwe9rXRvSy6tvUYCcV43VcqlFJzDEIzQCZ2KolwBP5mJ52G+DHDKqpEkkg9bb/TF3g9HL0Kj1lDa2JJ1GRck26CT9BgFFioTnvM7revqsb0E/aK+f4RxPKrrcsqASz06lpJA8Wxm4G0b8sWKfaGpUYM0EkKtv5QBPrzOH7McYZhoy7FjFwmhl5g94KiwFPXWMBO0/YuiWpvSPdVSivVWmAaRnfQJ8JmY/LEWw2+HX2ma9isNmBatLL5gRVQHziCPMEXGAvF+wdUePLN3lKfgJAKefQgdf1wdrcGVQRrYsBMx8VjYAXB25nc4+8H4s1FhJP75EYAlz1nvkQGSPhiUtVokgq9M6XUiDygkG46Hz9cMnZvtHp8LXVrOOo336g3GDPH+A0c0e/oNTSuRdDEVBGxHO1pF7c7DCNmsm1JjAKkbqd18j1HRhhglX2sswDjImz8Fz0gAsDaxHMcj+9j0NsF8pUEeGIG/r6RG2Ml7Ldp2SEaCvQxINrhokGLemH/hnFUJAHwtJRiANXXYmGB3HmDzjAiuN/4Iau3I4t3jDTq3/f7OLArDAhs6oGokBet7Y7qZrSJO3kJxC5EKwmNVz/05PQ474JxPLQ+XrUVJceCpcE2+CZlTOxWJsInfiqJy7DC7nEkeYO+NZhkQCnEZeG5nuKuqlSK6Dp3Nxzknlb64vVePGrVWnU7qo7nSgGrwzNtUwPb5Yz+pxCrcGo5Hmzf3wwdl+Bd8veF37zV4FU7KDDMT+WORkbYC1eNkxhbPAE1LsnQqOqIFKmkvdkC4ETadhyseQGAXbjheYSr37GIgKqkwApkE2BJJvzgnGndls1Raii0QFAFlHK5k+d5vzM4m45wda6MptIMGJg9YwNqSVyp3JXqOL+oaiHwzjIalpq6iGBh4MQSRY+99vphf4jwod7+EqldAttqUxsY3GHvI9me4osjMNEmNU2m3v/fH3I8DMeAgKJv+YfTC55jAAhudezmItPgrI1JlJRNiDJJN5Hdi7Wn/ABE45zeYavV0kELTlUBMmNR3ixJPS3yww9oOKUaJVaDrVqlvxHInSoN77SdgNt9sCuGcNFYmG0lixAClrTYEgjrynArOR15itz8/Ssocccih3asIGokqQdwsyZjYBd9m8sU+yWZcOhrpMU9KoQWgN4QwBEKSQPaesYZc1wC6LA0kA1PDAMGQsG55E+kc8Wsz3KowILt/BEEkbEBoBg3BuBGDI2gv3i9bGttiB8/kKhC5in3ZpxLqPCX5Tp/oTNvbFvgmfnuaL/EZYwDs2wnmY/rjhKqUgQ8MxadKzCg8iZvsb4o5vNU6xSjSYo1N5ZQdRUEgHSBy1RYERq8737zSBjTwPh4GvLlFcmSSwnUhJ+Nj8Vuo398DeOZR+/CU6emmukLoAAMHeLyekwBudxiLOcUq0y1JBWXWL1GRrqpA+NhHQbbAdcTZvM16VMKEcsWhuTKDJkA3mLT7+WOJwJIBJzLq9oBQJo0gahWEUzzVQCS3PxTMdMVONUKVdAKlHTWglXQJfUZKmTIBMExffaTNrs1wtCoYCJAMEXvf67xgrUySlykSQNRkHnax25G3nieJ45UyjWKGwRAXFqBfIg1aXjUqjNTYBtIIAIbfoDHngFxH7P8AL9zCMqVyFI1vU08iZXxRzFiY88OfGKgSh3TKLqW5kSsWNriY6YWuI505ghKU9C3MzvH9/LCxe1G4iS718MtFDJ9nGWsVYpUKkAaCSCY8wJM4eKM5Sj4QO+dYGx0gi7/Qx54hylGnl6Klp72WlD+USIvEEQJJuPEIEjE3C6DORXqCQDKofzRMG+yiLDE3WcV5E78TOStrnwsV+M1KgZZDgDeVcSYB1aiukzPIna/KYaeeO0g+/wDTGq5PPOVQshXULgxIkc4tI8pxWzFVEIp1lVlNqb6CbkmFMSQQBvsbn0R/UVv6cHMd/RAamdU8wzQQZjYjqNseAcdNiLwN+cki840LiXAaddwlRQ6hRAkagZmAx8QkA2mDA88Uj9nVA/BUqgjcakj6oThmuvn2nfp6l+JiP2iK7lb67+RB/TBvs5wMZlddSoQoMQLsY5SbD5HFvtX2GTL5V66VahZCAQ+iCC4XYLve1/7Y47AZj8OovRgfmP8ABxZ6uBGYT9NQULoSce8ZxkqdOkEpLpUHVpEHUdpJNyY5z/TA+qYa83EGZn19uuCD1sQ8RUVBTpHZ38UGCFCszXFxMabfxYkcuwiltIbYi1lczSeqzOzaNUgLuSLCZ2AEdemB9HhE1GKElCSZPl1nrf5DDBxDKZfLyQYHLVB+XX5Tinw2nWapqpVFT/VsfVeYtHXEYweMHwKqckCBuIVzSrqt9gwG25tMWjwifTB/ieTy+fVSxC5gRDCJbyI5yevM9cAe0GQqtmCzaUJAsCY25GJAJnHso3c1E1EAq2omZAI8Q2kn+pI2ucRnicrA7GCIu8Z4eaFViiuqBtPi3DAXEi3mPIjBvspxo/8AaJgsVKno6/Cff4fKZ5YcuIUkzeXcqPG6eNDz8IIbrIiZvB2jcZdUoPl6i6gVm4kRIwznkMiXYAjkP9TbMnlxWp96k0zBYhiCB1FthIPmIMjkBWX4jr3dE/1GJ9MVOzHGSaRqAqR4e9V/WA/pe46353rduOGmkErA2JYVCFCqCTKeECBKmJ56Z54owAGRDByy5H7xM4e2qnUX+XAV1m2CnCKul4POxxQzSaajDodsakrAtWlLgbSYnGhdmeFVWpClQAJ0eIsQLvcnzs23IfVTp8PliTsgDFgYA8QvJEdbWJ23w/dl67qveZcgNrNO6jxgIHg+kAe5wG04hqRuNvBuEMlDLDvShpBhqVSQdRm5mwnr9MH+F8ReSjsrxBkTeZ5H++EkcSWqrDvnpNTb8RJsWLHYyDsDtPK2CfY/NqVJZg7qSmpbiJJESNovhdXKmHaoEEmWe3XEzK00crYG3UyBbn6eeFp8oCq/eM04DEyGkgAEiY16RMHltGJe2Q1Vawo94KoembAkHwg7i62N58zI2wkcd4O5Vnauajn8kQFg32Pi2ja084xBAdst/cG9Y4AYhzjGRAanUy2p/GEGu4KFPiawgagSPX0GD3DWWmUU6Q7BmDARtpBAmTtB9sJWQzzh6QeoQiaS5kwwiLj824aL39MNOU4hl81lWrHV4GMqt2UKx08jpLLflE898DaveR4iiqxfAn3L8VrlwNDsqkjUyxqvBMmARflyB9cEM1n3oEiqpRGUlXZJKggzb+JZ1DrEbi9rsrkadVw6+KmpUrIuG0ib7mNsNfE+GU61MowHlsYsYOKhS5JBhrq1JGe8xjtLWq/eBU75XVoGtY0sBtZQBpIuLDc4t1sxRoqtejpUsoVlFPSZHMAW0ny2MSdsU+3PZN8nU1oT3RJlR8Ine2wN5wY7CZenmKdTLVgGVAbHqW5MOVv3ODYxgExioYX6QhQ7S61VlNgACZJCLzJXYGPXDGeNI4FM6KgllDpeCu/KUPncYAVex1OaiqjKG8OmmdOoG83tb6weuBA41l8q70ErVVCSg1Ug4DixOpSCRNo9cQAfEIcGOXAmFB1oF9SspamxIloixi0gdLGxtMYIcU4zSop3jsI5Rct5DrjKuGVqmXYaXpvpIZXVWBNvzBlBG9xf154uU6XewXaBcdABHLkB5bWxy2cMqIl1FqE67y/xHjtTNOEB0IWhVnczbUed48hjtswmXnTcwAZHwkb7Wv0M7W54FrmipWlRvUkgGw3jZjsIHPz64P5Ps0yIajsKhAvEncHUoX6TMm+1higDHfcwCoXO5TymX16alU/F8I3LbQbSCei+uGRcswANywGm87WJ8r9Yx8y+V0DxKy6YIEkjrG8+wjeL4mp5w1qBdB3fiMTzCttcW1AEbWnnjMvptc7mxUUrUBe0kDOxW4ESCAovb3iN8WKL0jqUhRJJYEfFy99v08sc5fSDClde5UbwbC3lG/7FnK8JWdbC87+/7+WAp0thbW5Z7EA3qdZc01AOkgXhmUnZZmTsAJufScXKVRVCFoLPAlRAY9Yk23O5tjnOUKSgIzQGJABY3JMx6E8vbFHjPGKWXTvczoRaYBViR4nIIZUHxE6Zi1w3kcblNfAcYg7c4G+1ziQp5PuraqtRQBN9NMhy3pIUf7hhD7C8RC5goTaopAH8w8Q+gb54t8R4dnOLZhsw6NQy4HgNQHwIBIhLFydyRa+9gMGuAfZtSolXrVWqVV0tpQlVUzIP8Z25kTBti9gB7xhHVKuB7mXs9xBUUsxAA5kwMQZfjVAxpcFrxPxCYmxuNvpg1muG0WXSUHkRM/PChxzhC5eoO7sri25IIN7m/n88KE8dyqUraeJJEG9os1VapqdlCD4IDEEddj7+gxDwbjVSidQfUCfkOcbX9cG+J8RpNTAqppGmBpvdY2Fosd8KuadQSFJI64tnIi4qbmQwhPj3aIPqZUNxpJbceGLQd5vJwvhypFyTEsCT7335nEdWrfyx5JjUWBH1GCKutwwqTjgCM/ZrjbKVhoIa2/Pym+36YJdteB/eMuK1Myygkje4ElYEkEi4+RmJwhZPMaWEHGi9kuLg+B4hhpb+jexvgLD8twYhYpRtRP7F8c7mqoc+BvC3obH5Y0mlk/vOUqUK3ipgqrKmrXAfUhBG6wFH+04z3tx2fNCuXUEK/i9Ou3z9D5HDn2D4gCKTEiGplKm26Hwk+0f8sNKQYRF/LYHwZndddLgjnfEvFqIOmoNmEH1xyBrSPzLi7lB3lJqZ+LceuHZMXuJCFm5G8Tz5fv1w5/ZrmAVpl5RVeq8myklaQ+I7xDYUqiEqynmIvyjFHK516DG2pSIiSCPMMDb9PLFXXkJZG4maVw3KVu/q9yVc1KlRmR2BUpPxSSOTgADqPM4s9kMnp72nramVcHQwAa0nSZnrpI8pkYXOxvaKotRamn8PTpYN6RbqSf1w7U6FKo7VQbiA4mJ25gE4Uce8bVsiF8vxFKx0m06g5EeF1sL+nrjM+2HCdOYKAuCWghg0QIJKMd5W/Plh4yPAmy2ZV6Utl3uxYg3YCF/iiQDfnzwM7f5xzWFMyF06o6ydIPyDfLFM8QSZSwhQSIJ4Rwhaiu7bQfoNh7YFcd4OlJk+7lhUcaSskEzAAjmCYOHbg00KKBbu7JIJAGlgxueUBZ9COmBHCqArZ9qhnRTOoepsv9T7YopwM+YhUctHfs3lRQoU6QM6FALHdjzJPmcGqeY64ELUgY+tmYGLDK9oydy12gy9OvRamwVpGzfv64yXP0GydVzTc6QYERdZHhPI7AYfOK8UCLqZtIHUx9OfpjOuP8e75gqydJux3J8hy/e2OZixhEtWob+0Y8n26qgDUtMiCQQpBJ5T4rDrhX1AuzhYLMT1ILGd/U4qpUtJxHXzRUSoPkf3viMsdRdnstOFH2hA1li5jE1GsarKiAqpi56eXpv74H5LJsw1MRNrXO889rWtvf1wx8Jod2peNwyrPU7n2H1OBOQs0+j/AAwH1Wb+Up5vgNOrS0N1lTz+cHfADJdp81lWNLvO8RHnS2oTeZBs4DCDB67YcQ28D9/3wB4rl6BqKzBSWOk/wgTMgb/muAOW2L9Pcdqdxj8R6ZK0DKIfpfazSqU9NSm1Op1+Jdx0E7fy4a+F8fylRETUBqEAkACQJAi0HSQ2wF/TGc5fOUkYaFQDawt58pgxsRscE6PGlgybb8zN9v8Az0wWy/ecTDNuBgCaNTz2WDAirTP+5do338v1xYTj9Ig6WVv4dJBn5bXxndLitEqdbFWkwCJBH7646ynHQTKyORIgDleIxQ9QfAxO5jGWj+uZL6SQNQ/N69B7DHJyVEOazqDUAPjfxFRaQpYnQOoWBheyXGmYrdWi0XBJ2tG5vtB2n0M5fiiMDPhYDZ/CJjrG31sbYgWchnMkWKx1ClJgQCNjfEecaBsTcCB5kCfbc+Qx4iwBHK+PisTY9bHqTO9rRbE51iExBzJE/PcnATtVR/CDn8jD6gj9+mGKrTufLADtm2nLO3Qp/wDMD+uBsmVMZob1rBFbIfecidI/ESXUc5Wbe6yPWMZ7Ur2mbY0nsnnIMbgnyt+9vfGc/aJwhqGccFQFeHUDYA2Kiw2aRt0PPBOlAcYh+sUo2YJznEOS388WOHltJLc4A8wMfeHZAL4ngmNrGP8AOLWaHvhpio9IlKaHPrb7Su+DHBc8VI6j97YDDFlFIGocsBtQMuDL9R0wdCR4mrZALmsvoaGdLrqHIT4Z/YgkYAcBybUxmMuAC1KprUybgwpUT5Mh/wBhxB2R4rpZfUH63+k/PB7tzk1pstekzJqAhlPI9evTrcYWRyBvuJkVKzsKvnr6xBBhgw574kSr3bhl2OOEHLkccj+E+2NeEEs8Zy4tUUeF/oef98AOJZQnYT6fvrg9w+sGDUX2bbyOKNSkUYo0gg2It7g46QYJ4VU06qZlXkEE2+GTB5+ftjVuyyp9zqvdh3ZMmZL6ZMT0J+gxl9LLM9emhYlmeI5Ceh9SbQB87abWr03WotNl0U1NOpSQFSYBEBlYaREmIvbALRuHpOpBwvtUrVaVIGaTd29yZTuhPreAL+uInzTZrMgEmC4VRvpAhT831fIYA8Xy9JAWWg9JhECWIYHyMlY3kW5dILdhW/FU7xJHnAP64VtAAAlOqf04jPmagAZxaPh8p8C+4RG/5Yo9lFANV43aAfJRH/ykYm4i0UQeUmR6U0P9ThUy/abuqarQpw7amqM7FlLMZJUQCL9flile9mJ1MASTNAzGcVVLMwUdSYwp8Y7cgSuXgkfnYW9lP6nCnnuI1Kraqrlo6mw9thjkZFySYtpDEk2giRfrB2wYjMNyZtKJPmc89Q6nYsTzJnEOVyLP4gIX+I7e3X2+eGLsFwNMwr1XAIpuFUG6z8Vx0vj72x4caVanTmVddYA8jcegtHr5XjGIavpsn1QPlcqBcjVOxO0f6euLNPL6zFje/t/n9MdC5AAAPMDkOhPXBKhTIAUbnedhhaxyJs9NSBoCRGkLCAANzA+cbT0GLWczK6VAsAIA6D18+vrjjMBEIaS4DeJYiRziLg/2wJzVfzvv0jyA8uuBkHGJrVhRiWqmd+n+LYk4Nk8vVZWqprILWba/lN9vpgXmqTKiszzqHhWbwZvHJZn6+uJeD5kA2uP3+/fEqCg5CJ9cyuvH5zQ+E0cuv4a0VhFUgmmIuWNrRMyTA/MMXuIdlctmVOpAjnZ6YCnbnuGv1HP3wB4ZnbdcH8lnZ5qAsFi1oG5M+W+AV9UWs4mY1tI4xE7W9h8xlk7yjqrgG9gukBSSzX2kWAnfed1zJa6iLUQagR+XcdQRvY9J2x+ghSBAN9uv9NsJvaXsWNXfZYKjXLUwID7mRFg2/K8iTYY0LRhMgbiaorHBmcZLOtMEgHa/K/M8vX/zgzkuPkmKni9T72P1xbCJV/7lMEg3DC45RtIOKud7MK6lqDeIb03aeWwbkfUkeYwotgY+xkWdKRsRl4BxafClQuLQjiYtsIueW15/LvhhyuaViRIDD8sz12PP9fLGPDN1KT6SullgFYg2E/pfpzwy8K7QitpDtpawV5uPUncT12wxywNiLh2r7x8qjnhV+0Zv+hqX/NT/AP6Lg7w7PFwUeO8Xfow5MPXf3wn/AGo58LRp0B/7jaj/AKU/+xB9jgqdpodOeTqRKfZ/NaWp33/sMF/tL4UtbJrmAJqUfEI/hYgN7AQfbCbk6wNOJuBjRshmFrUAjCQ6QQeepYI+uAUng5Bmx1FXNVYTFRWx8eqx64uZ3hho1qlFt0YifL8vzWD74gqrzxogCJPc/iQCoRfScXshm1a0STyP6Yjy9YWEYiz+Ugd4lrxHyv6f2OJZA0qOpsXejCnD6hpPpuLyJ/zjR1rLmMgNX5GAjqCR/UfTGfdnmOYRqdZhFMAhvzKDzkCYBte1x7GOHZ58vTr5eossuh0IEhlDaZ//AGHyOFXoPIn3mfepDB01/UDlcfIkeYx7HsPyJ8qICNYscTZj8Wlq2dBv1HTHsex0kwfoKhaymGQggxzEx5YE0OJVabPDHx/Hc+Kd5x7HsQRmQNSSrx+q5A1HSCPCTM+uNA7B2Ib+FWPzU/3x8x7CnUgAiBuOoU7U1itDSOeofos/T64SuFcLasYDBV2kiT/xsPecex7AahoylQBMjyYKNrsSoYXE+U4sN2igCkynQ0Bgp3A8/wB7Y9j2GF7TQUYEd/s9oUmVlph0M3M/EFNtQ5nHP2lQz0VAhwGOr+Q2K+swZ5X649j2BHsYwnxCBcnTFMSJuLj9744fNFQeuPuPYRf4puUD0ylUz0rEXJ3mwEExp/rP98Dq2Z0yxEgQOhvP9sex7BaxkiXuJCnE9Tpl0MxzveYAJI98SZI6TH7tj2PYbtReExnJLRm4NWJWfp6xhv4JU2nHsex5xtXD6yX+GNlNbDoNo/e39sSlbTj2PY9GO0yfMUu1XB0KfeUAVgNTD+IAGf8AdHP5+S0rkGfTHsexl3jDx2o+mdZzKU64/EU6olXBhl9D9YMiThQ4zwc5YGoj6kDlLiDIvtcR5yPTHzHsFoYnRguoRcHUYOyPFnqlKZJDie7fpE+FuqmP3yH9vclUqVDmGZYAC6RIjTvG8yxJ5b49j2GKz/MV6RiLAIvZNogDoZ/fth67PZg92nlGPY9ilvxieq6fdZgT7WsmBUo1gbt4CI6eLf1J+fzTdcjHsexoJ8ImNZ8ZlYVSDienniCsqGUMCVOzAQSp8jEe+PY9gsB4jTw/tQhARcpRVYuFlZJABJKgE2Hlv5A49mOPhzSYU9LBmEg3dWUnxERcEDa1vXHsexVpDAcDP//Z"
              link="/menu/assietes"
            />
          </div>
        </div>

        <div class="container mt-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">
              Plats Populaires
            </h5>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i class="fa fa-coffee fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i class="fa fa-hamburger fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Special</small>
                    <h6 class="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i class="fa fa-utensils fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-1.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-1.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-2.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-2.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-3.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-4.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
              <div id="tab-2" class="tab-pane fade show p-0">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-5.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-6.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-7.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-5.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
              <div id="tab-3" class="tab-pane fade show p-0">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-4.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
