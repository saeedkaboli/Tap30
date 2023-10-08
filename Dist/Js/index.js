
    // The Menu Hum
    const Dom={
        isClose:true,
        Heading:document.getElementById("Heading-Optional"),
        Title:document.getElementById("Title-Optional"),
        ImgHeader:document.getElementById("Img-Select-Optional")
    }
    
    
    $("#Box-Btn-Menu").click(()=>{
    if(Dom.isClose){
    $("#Two-Btn-Menu").css({"opacity":0});
    $("#One-Btn-Menu").css({"transform-origin":"90% 90%","transform":"rotate(-45deg)"});
    $("#Three-Btn-Menu").css({"transform-origin":"100% 60%","transform":"rotate(45deg)"});
    $("#Menu-Hum-list").css({"display":"block"});
    return Dom.isClose=!Dom.isClose;
    }else if(Dom.isClose===false){
        $("#Two-Btn-Menu").css({"opacity":1});
        $("#One-Btn-Menu").css({"transform-origin":"0% 0%","transform":"rotate(0deg)"});
        $("#Three-Btn-Menu").css({"transform-origin":"0% 0%","transform":"rotate(0deg)"});
        $("#Menu-Hum-list").css({"display":"none"});
        return Dom.isClose=!Dom.isClose
    }
    })

    //----------------------------------------The option index.html for select Car

    let ItemsSelection=document.querySelectorAll("#Item-Selection");
    ItemsSelection.forEach((items)=>{
        items.children[1].addEventListener("click",(e)=>{
            e.preventDefault();
            const data=e.target.innerText;
            if(data=="تپسی کلاسیک"){
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.`;
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-classic.webp`);
                
            }else if(data=="تپسی تلفنی"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-tel.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.`;

            }else if(data=="تپسی لاین"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-line.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود.`;
            }else if(data=="تپسی پیک"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-motopeyk.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.`;

            }else if(data=="تپسی اتو پیک"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-autopeyk.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.`;
            }else if(data=="تپسی پلاس"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-plus.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.`;

            }else if(data=="تپسی همیار"){
                Dom.ImgHeader.setAttribute("src",`/Dist/Img/illus-hamyar.webp`);
                Dom.Heading.innerHTML=data;
                Dom.Title.innerHTML=`سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.`;
            }
        })
    })

    //------------------------------------------The option TapsiPack.html for Question
    $(".QuesOne").click((e)=>{
        e.preventDefault();
       $("#TitleQusOne").toggle(1000);
    });
    $(".QuesTwo").click((e)=>{
        e.preventDefault();
       $("#TitleQusTwo").toggle(1000);
    });
    $(".QuesThree").click((e)=>{
        e.preventDefault();
       $("#TitleQusThree").toggle(1000);
    });
    $(".QuesFour").click((e)=>{
        e.preventDefault();
       $("#TitleQusFour").toggle(1000);
    });
    $(".QuesFive").click((e)=>{
        e.preventDefault();
       $("#TitleQusFive").toggle(1000);
    });

    // The Testing
    const ArrLink=document.querySelectorAll("#Link-menu-suport");
    ArrLink.forEach((items)=>{
        items.addEventListener("click",(e)=>{
            const TitleOption=e.target.innerText;
            if(TitleOption=="تماس با ما"){
                const childZero=e.target.parentElement;
                childZero.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base border-b-4 text-blue-700 border-blue-700 select-none")
                const childOne=ArrLink[1].parentElement;
                childOne.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none")
                const childTwo=ArrLink[2].parentElement;
                childTwo.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none")
                document.querySelector(".One").setAttribute("class","hidden One")
                document.querySelector(".Two").setAttribute("class","hidden Two")
                document.querySelector(".Three").setAttribute("class","block Three")
            }else if(TitleOption=="درخواست بازگشت اعتبار"){
                const childZero=e.target.parentElement;
                childZero.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base border-b-4 text-blue-700 border-blue-700 select-none")
                const childOne=ArrLink[0].parentElement;
                childOne.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none")
                const childTwo=ArrLink[2].parentElement;
                childTwo.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none");
                document.querySelector(".One").setAttribute("class","hidden One");
                document.querySelector(".Two").setAttribute("class","block Two")
                document.querySelector(".Three").setAttribute("class","hidden Three")

            }else if(TitleOption=="ثبت مشکل یا طرح پرسش"){
                const childZero=e.target.parentElement;
                childZero.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base border-b-4 text-blue-700 border-blue-700 select-none")
                const childOne=ArrLink[0].parentElement;
                childOne.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none")
                const childTwo=ArrLink[1].parentElement;
                childTwo.setAttribute("class","mx-2 sm:mx-3 md:mx-10 py-2 text-xs md:text-base select-none")
                document.querySelector(".One").setAttribute("class","block lg:flex One")
                document.querySelector(".Two").setAttribute("class","hidden Two");
                document.querySelector(".Three").setAttribute("class","hidden Three")

            }
        })
    })
