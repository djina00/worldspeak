$(document).ready(function () {

    let url = window.location.pathname;
    if (url == "/" || url.includes("/index.html")) {
        //Nav
        var navItems = [
            { text: 'Home', url: 'index.html' },
            { text: 'About', url: '#about' },
            { text: 'Blog', url: '#blog' },
            { text: 'Author', url: 'author.html' }
        ];

        function generateNavigation(nav) {
            var navContainer = document.querySelector(nav)
            var navList = document.createElement('ul');

            navItems.forEach(function (item) {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                link.textContent = item.text;
                link.href = item.url;
                listItem.appendChild(link);
                navList.appendChild(listItem);
            });
            navContainer.appendChild(navList);
        }
        //Navigation menu
        generateNavigation('#navbar');
        //Navigation for phone
        generateNavigation('#navHamburger');
        //Navigation for footer
        generateNavigation('#footerNav');

        //Toggle hamburger
        hamburger.addEventListener("click", () => {
            var hamburger = document.querySelector('#hamburgerToggle');
            var navHamburger = document.querySelector('#navHamburger');
            if (navHamburger.classList.contains('closeMenu')) {
                navHamburger.classList.remove('closeMenu');
                navHamburger.classList.add('showMenu');
            }
            else {
                navHamburger.classList.remove('showMenu');
                navHamburger.classList.add('closeMenu');
            }
        });

        //Modal
        function Modal(buttonModal) {
            var modal = document.querySelector('#startoday');
            var btn = document.querySelector(`${buttonModal}`);
            var span = document.getElementsByClassName("close")[0];

            btn.onclick = function () {
                modal.style.display = "block";
            }
            span.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        Modal('#startToday');
        Modal('#startToday2');
        Modal('#startToday3');

        //Toggle ReadMore (jQuery)
        function toggleReadMore(button, text) {
            $(`${button}`).click(function () {
                $(`${text}`).slideToggle('slow');
                if ($(`${button}`).text() == "Read More") {
                    $(this).text("Read Less");
                    $(this).removeClass("readMore");
                    $(this).addClass("readLess");
                }
                else {
                    $(this).text("Read More");
                    $(this).removeClass("readLess");
                    $(this).addClass("readMore");
                }
            }
            );
        }
        //Calling the First ReadMore
        toggleReadMore('#readMore1', '#hiddenMainP');
        toggleReadMore('#readMore2', '#hiddenP');

        //Language slider
        const prefiksImg = 'assets/img/';

        let srcFlagArray = [`${prefiksImg}turkey.png`, `${prefiksImg}german.png`, `${prefiksImg}japan.png`];
        let h4FlagText = ['Turkish', 'German', 'Japanese']
        let pFlagText = ['24 Popular Coursers', '98 Popular Coursers', '17 Popular Coursers'];

        setInterval(languageSlider, 4000);
        let counter = 1;
        function languageSlider() {
            let flag = document.querySelector('#flag');
            flag.src = srcFlagArray[counter];
            flag.alt = h4FlagText[counter];

            let text = document.querySelector('#languageText');
            text.textContent = h4FlagText[counter];
            text.nextElementSibling.textContent = pFlagText[counter];
            counter = (counter + 1) % srcFlagArray.length;
        }

        //Dynamic services blocks
        let servicesIcons = ['<i class="fa-solid fa-house-laptop"></i>', '<i class="fa-regular fa-newspaper"></i>', '<i class="fa-solid fa-person"></i>', '<i class="fa-solid fa-book-open-reader"></i>'];
        let servicesTitle = ['Remote Friendly', 'Digital Diploma', 'Private Target', 'Modern Method'];
        let servicesParagraphs = [
            'learn foreign languages remotely with remote-friendly courses and virtual classes.',
            'earn your digital diploma through remote-friendly programs with supported certification.',
            'master a language through personalized one-on-one instruction  with foreign-speaking tutors.',
            'explore a contemporary approach to language learning and blending technology.'
        ]
        var services = document.querySelector('#services');
        for (let i = 0; i < servicesIcons.length; i++) {
            let servicesBlock = document.createElement('div');
            servicesBlock.classList.add('servicesBlocks');
            servicesBlock.classList.add('col-8', 'col-sm-6', 'col-lg-3');

            let p1 = document.createElement('p');
            p1.innerHTML = servicesIcons[i];
            servicesBlock.appendChild(p1);

            let h3 = document.createElement('h3');
            let title = document.createTextNode(servicesTitle[i]);
            h3.appendChild(title);
            servicesBlock.appendChild(h3);

            let p2 = document.createElement('p');
            p2.classList.add('text-body-tertiary');
            let paragraph = document.createTextNode(servicesParagraphs[i]);
            p2.appendChild(paragraph);
            servicesBlock.appendChild(p2);

            services.appendChild(servicesBlock);
        }

        //Services HOVER jQuery
        $('.servicesBlocks').hover(
            function () {
                $(this).addClass('servicesBlocksHover shadow rounded');

            }, function () {
                $(this).removeClass('servicesBlocksHover shadow rounded');

            }
        );

        //Dynamic unordered list

        let reasons = ['Interactive Learning: ', 'Experienced Instructors: ', 'Cutting-edge Resources: ', 'Learning Plans: '];
        let explain = [' Engage in real conversations and cultural activities that enhance your language skills.',
            'Learn from passionate language experts dedicated to your success.',
            'Access a variety of multimedia resources to make your learning experience enjoyable and effective.',
            'Customize your lessons with programs designed for individual success.'
        ];
        var list = '';
        for (let i = 0; i < reasons.length; i++) {
            list += `<li class='mb-2'><span class='unordered-l'>${reasons[i]}</span> ${explain[i]}</li>`;
        }
        let ulList = document.querySelector('#choose');
        ulList.innerHTML = list;

        // Like button

        // Random number like
        let like = document.querySelector('#circleLike');
        //Random number between 100 and 1000
        let number = Math.floor(Math.random() * 901 + 100);
        like.nextElementSibling.innerHTML = number;

        like.addEventListener('click', () => {
            if (like.style.color == 'white') {
                like.style.color = 'red';
                number++;
                like.nextElementSibling.innerHTML = number;
            }
            else {
                like.style.color = 'white';
                number--;
                like.nextElementSibling.innerHTML = number;
            }
        });

        //Dynamic cards

        let ulCarousel = document.querySelector(".carousel");

        let srcCarousel = [`${prefiksImg}aisha.jpg`, `${prefiksImg}ajrun.jpg`, `${prefiksImg}freja.jpg`, `${prefiksImg}dimitri.jpg`, 
        `${prefiksImg}alliyah.jpg`, `${prefiksImg}rafael.jpg`];
        
        let h3Carousel = ['Aisha Khan', 'Arjun Patel', 'Freja Larsen', 'Dimitri Ivanov', 'Aaliyah Malik', 'Rafael Gonzalez'];
        let spanCarousel = ['"Learning languages with this company has been an enlightening experience."',
            '"I am grateful for the engaging language courses provided here."',
            '"Choosing this language school was a fantastic decision. "',
            '"I highly recommend this language school for anyone eager to learn."',
            '"Enrolling in language courses here has been a game-changer. "',
            '"My language learning journey with this company has exceeded my expectations."'
        ];

        for (let i = 0; i < srcCarousel.length; i++) {
            let li = document.createElement('li');
            li.classList.add('card');

            let div = document.createElement('div');
            div.classList.add('img');

            let img = document.createElement('img');
            img.setAttribute('src', `${srcCarousel[i]}`);
            img.setAttribute('alt', `${h3Carousel[i]}`);
            img.setAttribute('draggable', 'false');

            div.appendChild(img);

            let h3 = document.createElement('h3');
            h3.innerHTML = h3Carousel[i];

            let span = document.createElement('span');
            span.classList.add('text-center', 'px-2', 'text-body-tertiary');
            span.innerHTML = spanCarousel[i];

            li.appendChild(div);
            li.appendChild(h3);
            li.appendChild(span);

            ulCarousel.appendChild(li);
        }

        //Dragable card slider
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];
        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");

            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }
        const dragging = (e) => {
            if (!isDragging) return;

            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }
        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }
        const infiniteScroll = () => {

            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }

            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }
        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;

            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        //Dynamic posts
        var currentDate = new Date();

        var months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        let date = currentDate.getDate() + '. ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();;

        let contentForPosts = [
            { title: 'Linguistics Digest', secondParagraph: 'Your quick source for language trends, learning hacks, and success stories.' },
            { title: 'Polyglot Pulse', secondParagraph: 'Catch up on language news in a flash. Discover effective tips and real success tales.' }

        ];

        function addElementsInsidePost() {

            let postElements = document.querySelectorAll('.post');

            postElements.forEach(function (postElement, index) {

                let firstPTag = document.createElement('p');
                firstPTag.classList.add('text-body-tertiary');
                firstPTag.textContent = date;

                let h5Tag = document.createElement('h5');
                h5Tag.classList.add('fw-bold');
                h5Tag.textContent = contentForPosts[index].title;

                let secondPTag = document.createElement('p');
                secondPTag.classList.add('text-body-tertiary');
                secondPTag.textContent = contentForPosts[index].secondParagraph;

                postElement.appendChild(firstPTag);
                postElement.appendChild(h5Tag);
                postElement.appendChild(secondPTag);
            });
        }
        addElementsInsidePost();

        //news dynamic content
        let newsSlider = document.querySelector('#newsSlider');

        let news = `
    <p>${date}</p>
    <h4>Unlock Your Potential</h4>
    <p>The Language Code: Crack It, Transform Your Tomorrow</p>
`;

        newsSlider.innerHTML = news;

        //news Slider

        let srcNews = ['books.jpg', 'learn.jpg', 'note.jpg'];

        let currentImageIndex = 0;

        function changeNewsBackground() {
            newsSlider.style.backgroundImage = `url("${prefiksImg}/${srcNews[currentImageIndex]}")`;
            currentImageIndex = (currentImageIndex + 1) % srcNews.length;
        }

        setInterval(changeNewsBackground, 4000);

        changeNewsBackground();

        //Dunamic Social Media
        let socialMediaLinks = [
            { url: 'https://www.instagram.com/', iconClass: 'fa-brands fa-instagram' },
            { url: 'https://www.facebook.com/', iconClass: 'fa-brands fa-facebook-f' },
            { url: 'https://www.twitter.com/', iconClass: 'fa-brands fa-twitter' }
        ];

        function generateSocialLinks() {
            let socialMedia = document.querySelector('#socialMedia');
            let linksHTML = '';

            socialMediaLinks.forEach(function (socialMedia) {
                linksHTML += `<a href="${socialMedia.url}" target="_blank"><i class="fa ${socialMedia.iconClass}"></i></a>`;
            });

            socialMedia.innerHTML = linksHTML;
        }
        generateSocialLinks();

        //Copyright date
        let dateCopyRight = document.querySelector('#date');
        let year = currentDate.getFullYear();
        dateCopyRight.innerHTML = year;
    }

    // Form validation
    if (url == "/" || url.includes("/sign-up.html")) {

        let form = document.querySelector('#form');
        let firstName = document.querySelector('#firstName');
        let lastName = document.querySelector('#lastName');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let passwordRepeat = document.querySelector('#passwordRepeat');
        let submit = document.querySelector('#submit');

        form.addEventListener('submit', button => {
            button.preventDefault();
            validateForm();
            if (error == 0) {
                submit.nextElementSibling.classList.remove('d-none');
            }

        });

        let setError = (element, message) => {
            let inputControl = element.parentElement;
            let errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerHTML = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');

        };
        let setSuccess = element => {
            let inputControl = element.parentElement;
            let errorDisplay = inputControl.querySelector('.error');

            errorDisplay.textContent = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');

        };

        let isValidEmail = email => {
            let regExpEmail = /^[a-z0-9]{3,}([\.][a-z0-9\-\$\*\_]+)*[\@](gmail.com|yahoo.com|edu.rs)$/;
            return regExpEmail.test(email);
        };
        let isValidFirstLastName = firstLastName => {
            let regExpFirstLastName = /^[A-ZĐŽŠČĆ][a-zđžščć]{2,}$/;
            return regExpFirstLastName.test(firstLastName);
        }

        let validateForm = () => {

            error = 0;
            let firstNameValue = firstName.value;
            let lastNameValue = lastName.value;
            let emailValue = email.value;
            let passwordValue = password.value;
            let passwordRepeatValue = passwordRepeat.value;

            if (firstNameValue == '') {
                setError(firstName, 'First name is required');
                error++;
            }
            else if (!isValidFirstLastName(firstNameValue)) {
                setError(firstName, 'Format is not valid.Example: Peter');
                error++;
            }
            else {
                setSuccess(firstName);
            }

            if (lastNameValue == '') {
                setError(lastName, 'Last name is required');
                error++;
            }
            else if (!isValidFirstLastName(lastNameValue)) {
                setError(lastName, 'Format is not valid.Example: Peterson');
                error++;
            }
            else {
                setSuccess(lastName);
            }

            if (emailValue == '') {
                setError(email, 'Email is required');
                error++;
            }
            else if (!isValidEmail(emailValue)) {
                setError(email, 'Format is not valid.Example: peter123@gmail.com');
                error++;
            }
            else {
                setSuccess(email);
            }

            if (passwordValue == '') {
                setError(password, 'Password is required');
                error++;
            }
            else if (passwordValue.length < 8) {
                setError(password, 'Password must be at least 8 character');
                error++;
            }
            else {
                setSuccess(password);
            }

            if (passwordRepeatValue == '') {
                setError(passwordRepeat, 'Please confirm your password');
                error++;
            }
            else if (passwordRepeatValue != passwordValue) {
                setError(passwordRepeat, 'Password doesn`t match');
                error++;
            }
            else {
                setSuccess(passwordRepeat);
            }

        };


    }





















});

