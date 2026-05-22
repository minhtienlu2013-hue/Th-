const data = [
   "1. Read the text and decide whether the statements are TRUE or FALSE.<br> 1. Sir David Attenborough is very popular in the UK.<br> True.<br> 2. Before Sir David started his work for the BBC, they had no programmes about nature at all.<br> False.<br> Giải thích: Bài ghi “There weren’t many nature shows then” = có ít, không phải là không có.<br>",
    "2. Read the text and decide whether the statements are TRUE or FALSE.<br> 3. Sir David’s first TV series was called Zoo Quest.<br> True.<br> 4. Sir David doesn’t use new technology to film his documentaries.<br> False.<br> Giải thích: Bài ghi “The films are now in full colour, HD and even 3D.”<br>",
    "3. Read the text and choose the correct answer.<br> 1. B.<br> Yes, but it’s not easy.<br> 2. B.<br> The Empire State Building.<br>",
    "4. Read the passage and choose the correct answer.<br> a. A.<br> shops.<br> b. B.<br> noisy.<br>",
    "5. Fill each blank with one suitable word.<br> 1.A.<br> clean.<br> 2.B.<br> a.<br> 3.C.<br> pollution.<br> 4.C.<br> health.<br>",
    "6. Circle True or False.<br> 1. You should put everything you will possibly need on your desk.<br> False.<br> Giải thích: Bài ghi Only keep things you really need.<br> 2. You should only have one pen or pencil.<br> False.<br> Giải thích: Bài ghi a jar for pens and pencils.<br>",
    "7. Circle True or False.<br> True.<br> True.<br>",
    "8. Group ideas.<br> Take photos of things you want to remember → Do….<br> Keep a lot of paper on your desk → Don’t….<br> Giải thích: Tip 3 khuyên giảm giấy.<br>",
    "9. Group ideas.<br> Keep pens and pencils in a jar → Đúng.<br> Leave your desk untidy at the end of the day → Sai.<br> Giải thích: Tip 7 yêu cầu dọn bàn mỗi ngày.<br> Keep a drink on your desk → Sai.<br> Giải thích: Tip 2 ghi rõ không để nước trên bàn.<br>",
    "10. True or False.<br> False.<br> Giải thích: Bài ghi south of England.<br> True.<br>",
    "11. Smartphones.<br> a. B.<br> The benefits of smartphones.<br> Giải thích: Thông tin: Smartphones have changed the way we communicate and get information.<br> They provide us with a lot of benefits that make our lives easier and more convenient.<br> b. D. uncomfortable (adj): không thoải mái.<br> handy (adj): tiện dụng.<br> simple (adj): đơn giản.<br> effortless (adj): dễ dàng.<br> convenient = effortless (adj): tiện lợi.<br> Nguồn: https://loigiaihay.com/de-thi-hoc-ki-2-tieng-anh-8-right-on-de-so-3-a162577.html.<br> c. C.<br> Smartphones can help people capture and share memories with others.<br> Giải thích: Thông tin: many smartphones are equipped with cameras, allowing us to capture and share memories with others.<br>",
    "12. Smartphones.<br> a. D.<br> b. D.<br>",
    "13. Mars.<br> a. A.<br> changes.<br> b. B.<br> at.<br> c. C.<br> because.<br> d. D.<br> straight.<br>",
    "14. Climate change.<br> a. D.<br> water crisis.<br>",
    "15. Climate change.<br> a. C.<br> Dominica.<br>",
    "16. 1) vacation.<br> 2) and.<br> 3) with.<br> 4) is.<br> 5) Pagoda.<br>",
    "17. Lan.<br> 1. D.<br> 2. B.<br>",
    "18. Lan.<br> 1. A.<br>",
    "19. 1. Supermarket.<br> 2. Cinema.<br>",
    "20. 1.False.<br> 2.False.<br> 3. True.<br> 4. False.<br>",
    "21. 1.True.<br> 2.True.<br>",
    "22. Rome.<br>",
    "23. Athens.<br>",
    "24. New York.<br>",
    "25. 1.2/two.<br> 2.21.<br>",
    "26. 1.New York.<br> 2.76.<br>",
    "27. a) B.<br> b) B.<br>",
    "28. C.<br>",
    "29. C.<br>",
    "30. A.<br>",
    "31. 1)8/eight.<br> 2)Nov.<br> 10th/ November 10th.<br> 3) drama.<br>",
    "32. 1)music.<br> 2) drama.<br> 3) poor children.<br> 4)ddfolkshow.<br>",
    "33. 1)2015.<br> 2) largest.<br> 3) electric car.<br>",
    "34. 1) electric car.<br> 2) electricity.<br> 3) read.<br>",
    "35. 1) C.<br> 2) B.<br>",
    "36. 1) traditional.<br> 2) field.<br>",
    "37. 1) forest / mountains.<br> 2) Rong.<br>",
    "38. C.<br>",
    "39. A.<br>",
    "40. Choose A, B, C, or D.<br> 1.C.<br>",
    "41. Rewrite.<br> a. The more he speaks, the more bored people feel.<br> b. After Miss Hoa had said goodbye to her parents, she left the house.<br>",
    "42. Gap fill.<br> be / become.<br> to.<br> stage / age.<br> while / although / though.<br> when / if.<br>",
    "43. Cloze test.<br> D.<br> several.<br> D.<br> from.<br> A.<br> which.<br> C.<br> inexperienced.<br>",
    "44. Reading.<br> B.<br>",
    "45. Gap fill.<br> 1.However / Nevertheless.<br> 2. plenty/ lots.<br> 3.skills.<br>",
    "46. Gap fill.<br> on.<br> reduces / lessens.<br> better.<br> diseases.<br>",
    "47. Rewrite.<br> If Mary hadn’t lost her identity card last week, she wouldn’t be having a lot of trouble now.<br> Paper is believed to have been invented by the Chinese in 105 A.<br>D.<br>",
    "48. → The fatter she gets, the more tired she feels.<br>",
    "49. Word form.<br> 1. Cycling has become a hot trend in this city nowadays.<br> Giải thích: Trước động từ “has” cần một danh từ đóng vai trò là chủ ngữ.<br> cycle (v): đạp xe => cycling (n): việc đạp xe.<br> Cycling has become a hot trend in this city nowadays.<br> 2. This type of transport is powered by electric motors.<br> Giải thích: Trước danh từ “motors” (động cơ) cần một tính từ.<br> electricity (n): điện.<br> electric (a): thuộc về điện.<br> This type of transport is powered by electric motors.<br>",
    "50. Word form.<br> 1.natural.<br> Giải thích: Trước danh từ “resources” (nguồn) cần một tính từ.<br> nature (n): thiên nhiên => natural (adj): thiên nhiên.<br> These types of energy do not cause pollution or waste natural resources.<br> 2.cultural.<br> Trước danh từ “shows” (chương trình) cần một danh từ.<br> culture (n): văn hóa.<br> cultural (adj): thuộc về văn hóa.<br> There are some other activities such as cultural shows, buffalo races and traditional games.<br>",
    "51. It is polite to say \"thank you\" when someone helps you.<br> Giải thích: sau động từ tobe thì cần ADJ.<br> politely là adv nên để chuyển sang adj thì ta bỏ -ly.<br>",
    "52. They live in a small community in the mountains.<br>",
    "53. Methods to control population should be carried out soon.<br>",
    "54. Some people are interested in horror movies because they want to experience complex and extreme emotions.<br>",
    "55. If you don’t water the plants, they will die.<br>",
    "56. If the weather is bad, we will cancel the journey.<br>",
    "57. We had just begun eating when it started to rain.<br>",
    "58. John said to Jane that he would go to the theatre performance with her the next day.<br> John said to Jane that he would go to the theatre performance with her the following day.<br>",
    "59. A.<br>",
    "60. Order: B – A – C – D – E.<br>"
];

const keysContainer = document.getElementById('quick-keys-list');
const detailsContainer = document.getElementById('answer-details');

data.forEach((item) => {
    const dotIndex = item.indexOf('.');
    const qNum = item.substring(0, dotIndex).trim();
    const content = item.substring(dotIndex + 1).trim();

    const keyBtn = document.createElement('div');
    keyBtn.className = 'key-item';
    keyBtn.innerText = qNum;
    keyBtn.onclick = () => scrollToDetail(`q${qNum}`);
    keysContainer.appendChild(keyBtn);

    const card = document.createElement('div');
    card.className = 'detail-card';
    card.id = `q${qNum}`;
    card.innerHTML = `
        <h2>Question ${qNum}</h2>
        <div class="ans-content">${content.replace(/;/g, '<br>')}</div>
    `;
    detailsContainer.appendChild(card);
});

function scrollToDetail(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        document.querySelectorAll('.detail-card').forEach(c => c.style.borderLeft = "none");
        element.style.borderLeft = "5px solid #5498ba";
        element.style.backgroundColor = "#f9feff";
    }
}
