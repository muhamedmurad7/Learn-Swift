const DATA = [
    {
        id: 1,
        title: "إعداد بيئة التطوير",
        phase: "تمهيد",
        icon: "settings",
        topics: [
            {
                title: "تحميل وتثبيت Xcode",
                content: `<p class="mb-4">Xcode هو البيئة الرسمية لتطوير تطبيقات Apple. هو الوحيد اللي يقدر يبني تطبيقات iOS/iPadOS/watchOS/macOS.</p><div class="info-box p-4 mb-4"><p class="text-sm text-orange-300">⚠️ Xcode بيشتغل على <strong>Mac</strong> بس — لازم macOS. الحجم حوالي 12 جيجا.</p></div><h4 class="font-bold text-white mb-2">الخطوات:</h4><ol class="list-decimal list-inside space-y-2 text-neutral-300 text-sm mb-4"><li>افتح <strong>App Store</strong> على الماك</li><li>ابحث عن <strong>Xcode</strong></li><li>اضغط <strong>Get / Install</strong></li><li>بعد التثبيت افتح Xcode مرة واحدة عشان يكمل تنزيل الأدوات</li><li>اقبل الـ terms of agreement</li></ol><div class="tip-box p-4"><p class="text-sm text-green-300">💡 لو الماك قديم، ابحث عن نسخة Xcode متوافقة من موقع <strong>xcode Releases</strong>.</p></div>`
            },
            {
                title: "فهم واجهة Xcode",
                content: `<p class="mb-4">واجهة Xcode فيها 4 أجزاء أساسية:</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"><div class="p-3 rounded-xl bg-white/[0.03] border border-white/5"><h5 class="font-bold text-orange-400 text-sm mb-1">Navigator</h5><p class="text-xs text-neutral-400">ملفات المشروع، البحث، الأخطاء</p></div><div class="p-3 rounded-xl bg-white/[0.03] border border-white/5"><h5 class="font-bold text-orange-400 text-sm mb-1">Editor</h5><p class="text-xs text-neutral-400">كتابة الكود وتعديل الـ Storyboard</p></div><div class="p-3 rounded-xl bg-white/[0.03] border border-white/5"><h5 class="font-bold text-orange-400 text-sm mb-1">Inspector</h5><p class="text-xs text-neutral-400">خصائص العنصر المحدد</p></div><div class="p-3 rounded-xl bg-white/[0.03] border border-white/5"><h5 class="font-bold text-orange-400 text-sm mb-1">Debug Area</h5><p class="text-xs text-neutral-400">Console للـ print output</p></div></div><div class="info-box p-4"><p class="text-sm text-orange-300">⌨️ <strong>Cmd+R</strong> = تشغيل | <strong>Cmd+B</strong> = بناء | <strong>Cmd+.</strong> = comment | <strong>Cmd+Shift+O</strong> = فتح ملف سريع</p></div>`
            },
            {
                title: "أول كود — Playground",
                content: `<p class="mb-4">Playground مكان آمن للتجربة بدون مشروع كامل.</p><div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// أول سطر كود</span>\n<span class="cf">print</span>(<span class="cs">"Hello, Swift!"</span>)\n\n<span class="cc">// متغير بسيط</span>\n<span class="ck">var</span> name = <span class="cs">"مراد"</span>\n<span class="cf">print</span>(<span class="cs">"مرحبا يا \\(name)"</span>)\n\n<span class="cc">// ثابت</span>\n<span class="ck">let</span> birthYear = <span class="cn">1997</span>\n<span class="cf">print</span>(<span class="cs">"سنة الميلاد: \\(birthYear)"</span>)</pre></div><div class="tip-box p-4"><p class="text-sm text-green-300">💡 مش عندك Mac؟ استخدم <strong>Swift Playgrounds</strong> على iPad أو <strong>online playground</strong> في المتصفح.</p></div>`
            }
        ]
    },
    {
        id: 2,
        title: "المتغيرات والأنواع الأساسية",
        phase: "أساسيات",
        icon: "braces",
        topics: [
            {
                title: "var و let — الفرق الجوهري",
                content: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"><div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20"><h5 class="font-bold text-blue-400 mb-2">var (متغير)</h5><p class="text-xs text-neutral-400 mb-2">قيمته ممكن تتغير</p><div class="code-block p-3 text-xs"><pre><span class="ck">var</span> age = <span class="cn">25</span>\nage = <span class="cn">26</span>  <span class="cc">// ✅</span></pre></div></div><div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20"><h5 class="font-bold text-green-400 mb-2">let (ثابت)</h5><p class="text-xs text-neutral-400 mb-2">قيمته ما تتغيرش</p><div class="code-block p-3 text-xs"><pre><span class="ck">let</span> pi = <span class="cn">3.14159</span>\npi = <span class="cn">3</span>  <span class="cc">// ❌ خطأ!</span></pre></div></div></div><div class="warning-box p-4 mb-4"><p class="text-sm text-yellow-300">⚠️ <strong>استخدم let دائماً</strong> إلا لو متأكد إنك هتحتاج تغيير القيمة.</p></div><div class="code-block p-4 text-sm leading-relaxed"><pre><span class="ck">let</span> username = <span class="cs">"Murad"</span>\n<span class="ck">let</span> maxAttempts = <span class="cn">3</span>\n<span class="ck">var</span> attempts = <span class="cn">0</span>  <span class="cc">// var لأنها هتتغير</span>\nattempts += <span class="cn">1</span>  <span class="cc">// ✅</span></pre></div>`
            },
            {
                title: "Type Inference و Type Annotation",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// Type Inference — Swift بتحدد النوع تلقائياً</span>\n<span class="ck">let</span> name = <span class="cs">"مراد"</span>       <span class="cc">// String</span>\n<span class="ck">let</span> age = <span class="cn">25</span>            <span class="cc">// Int</span>\n<span class="ck">let</span> price = <span class="cn">9.99</span>         <span class="cc">// Double</span>\n<span class="ck">let</span> isActive = <span class="cn">true</span>       <span class="cc">// Bool</span>\n\n<span class="cc">// Type Annotation — تحديد صراحي</span>\n<span class="ck">let</span> score: <span class="ct">Int</span> = <span class="cn">100</span>\n<span class="ck">var</span> temp: <span class="ct">Double</span> = <span class="cn">36.5</span>\n\n<span class="cc">// مفيش implicit conversion</span>\n<span class="ck">let</span> a: <span class="ct">Int</span> = <span class="cn">5</span>\n<span class="ck">let</span> b: <span class="ct">Double</span> = <span class="cn">2.5</span>\n<span class="ck">let</span> r = <span class="ct">Double</span>(a) + b  <span class="cc">// ✅ 7.5</span></pre></div>`
            },
            {
                title: "Optionals — أهم مفهوم في Swift",
                content: `<p class="mb-4">Optional = قيمة ممكن تكون فيها شي أو <strong>nil</strong> (فاضية).</p><div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">var</span> nickname: <span class="ct">String</span>? = <span class="cs">"مراد"</span>\nnickname = <span class="cn">nil</span>  <span class="cc">// ✅</span>\n\n<span class="cc">// 1. if let</span>\n<span class="ck">if let</span> safe = nickname {\n    <span class="cf">print</span>(<span class="cs">"الاسم: \\(safe)"</span>)\n}\n\n<span class="cc">// 2. guard let — الأفضل في الدوال</span>\n<span class="ck">func</span> <span class="cf">greet</span>(name: <span class="ct">String</span>?) {\n    <span class="ck">guard let</span> n = name <span class="ck">else</span> { <span class="cf">print</span>(<span class="cs">"خطأ"</span>); <span class="ck">return</span> }\n    <span class="cf">print</span>(<span class="cs">"مرحبا \\(n)"</span>)\n}\n\n<span class="cc">// 3. Nil Coalescing ??</span>\n<span class="ck">let</span> display = nickname ?? <span class="cs">"مستخدم"</span>\n\n<span class="cc">// 4. Force unwrap ! — خطير!</span>\n<span class="cc">// print(nickname!)  // لو nil = crash!</span></pre></div><div class="warning-box p-4"><p class="text-sm text-yellow-300">🚫 <strong>تجنب !</strong> قدر الممكن. 90% من crashes بسببه.</p></div>`
            }
        ]
    },
    {
        id: 3,
        title: "التحكم في التدفق",
        phase: "أساسيات",
        icon: "git-branch",
        topics: [
            {
                title: "if / else و switch",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">let</span> temp = <span class="cn">35</span>\n<span class="ck">if</span> temp > <span class="cn">40</span> { <span class="cf">print</span>(<span class="cs">"حرارة عالية!"</span>) }\n<span class="ck">else if</span> temp > <span class="cn">30</span> { <span class="cf">print</span>(<span class="cs">"مرتفعة"</span>) }\n<span class="ck">else</span> { <span class="cf">print</span>(<span class="cs">"معتدل"</span>) }\n\n<span class="cc">// switch مع interval</span>\n<span class="ck">switch</span> <span class="cn">85</span> {\n<span class="ck">case</span> <span class="cn">90</span>...<span class="cn">100</span>: <span class="cf">print</span>(<span class="cs">"A"</span>)\n<span class="ck">case</span> <span class="cn">80</span>..<span class="cn">90</span>:  <span class="cf">print</span>(<span class="cs">"B"</span>)\n<span class="ck">default</span>:      <span class="cf">print</span>(<span class="cs">"C"</span>)\n}\n\n<span class="cc">// switch مع where</span>\n<span class="ck">let</span> p = (<span class="cn">1</span>, -<span class="cn">1</span>)\n<span class="ck">switch</span> p {\n<span class="ck">case let</span> (x, y) <span class="ck">where</span> x == -y:\n    <span class="cf">print</span>(<span class="cs">"على الخط y = -x"</span>)\n<span class="ck">default</span>: <span class="cf">print</span>(<span class="cs">"أي مكان"</span>)\n}</pre></div>`
            },
            {
                title: "guard و Loops",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">func</span> <span class="cf">process</span>(name: <span class="ct">String</span>?, age: <span class="ct">Int</span>?) {\n    <span class="ck">guard let</span> name = name <span class="ck">else</span> { <span class="cf">print</span>(<span class="cs">"لازم اسم"</span>); <span class="ck">return</span> }\n    <span class="ck">guard let</span> age = age, age >= <span class="cn">18</span> <span class="ck">else</span> { <span class="cf">print</span>(<span class="cs">"لازم 18+"</span>); <span class="ck">return</span> }\n    <span class="cf">print</span>(<span class="cs">"\\(name)، \\(age) سنة"</span>)\n}\n\n<span class="cc">// for-in مع enumerated</span>\n<span class="ck">for</span> (i, car) <span class="ck">in</span> [<span class="cs">"BMW"</span>,<span class="cs">"VW"</span>].<span class="cf">enumerated</span>() { <span class="cf">print</span>(<span class="cs">"\\(i): \\(car)"</span>) }\n\n<span class="cc">// stride</span>\n<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">stride</span>(from: <span class="cn">0</span>, to: <span class="cn">10</span>, by: <span class="cn">3</span>) { <span class="cf">print</span>(i) }\n\n<span class="cc">// while / repeat-while</span>\n<span class="ck">var</span> n = <span class="cn">5</span>\n<span class="ck">while</span> n > <span class="cn">0</span> { n -= <span class="cn">1</span> }\n\n<span class="ck">var</span> m = <span class="cn">0</span>\n<span class="ck">repeat</span> { m += <span class="cn">1</span> } <span class="ck">while</span> m &lt; <span class="cn">3</span></pre></div>`
            }
        ]
    },
    {
        id: 4,
        title: "المجموعات (Collections)",
        phase: "أساسيات",
        icon: "layers",
        topics: [
            {
                title: "Array و Functional Methods",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">var</span> nums = [<span class="cn">5</span>, <span class="cn">1</span>, <span class="cn">3</span>, <span class="cn">2</span>, <span class="cn">4</span>]\nnums.<span class="cf">append</span>(<span class="cn">6</span>)\nnums.<span class="cf">insert</span>(<span class="cn">99</span>, at: <span class="cn">1</span>)\nnums.<span class="cf">remove</span>(at: <span class="cn">1</span>)\nnums.<span class="cf">sorted</span>()  <span class="cc">// [1,2,3,4,5,6]</span>\n\n<span class="cc">// filter, map, reduce</span>\n<span class="ck">let</span> prices = [<span class="cn">45</span>, <span class="cn">120</span>, <span class="cn">80</span>, <span class="cn">200</span>, <span class="cn">30</span>]\nprices.<span class="cf">filter</span> { $<span class="cn">0</span> > <span class="cn">100</span> }    <span class="cc">// [120, 200]</span>\nprices.<span class="cf">map</span> { $<span class="cn">0</span> * <span class="cn">1.15</span> }      <span class="cc">// [51.75, ...]</span>\nprices.<span class="cf">reduce</span>(<span class="cn">0</span>, +)         <span class="cc">// 475</span>\n\n<span class="cc">// chaining</span>\n<span class="ck">let</span> result = prices\n    .<span class="cf">filter</span> { $<span class="cn">0</span> > <span class="cn">50</span> }\n    .<span class="cf">map</span> { <span class="cs">"\\($0) جنيه"</span> }\n    .<span class="cf">sorted</span>()\n\n<span class="cc">// compactMap — removes nils</span>\n<span class="ck">let</span> strs = [<span class="cs">"1"</span>, <span class="cs">"abc"</span>, <span class="cs">"3"</span>]\nstrs.<span class="cf">compactMap</span> { <span class="ct">Int</span>($<span class="cn">0</span>) }  <span class="cc">// [1, 3]</span></pre></div>`
            },
            {
                title: "Set و Dictionary",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// Set — بدون تكرار، O(1) lookup</span>\n<span class="ck">var</span> s: <span class="ct">Set</span>&lt;<span class="ct">Int</span>&gt; = [<span class="cn">1</span>, <span class="cn">2</span>, <span class="cn">3</span>, <span class="cn">2</span>]  <span class="cc">// {1, 2, 3}</span>\ns.<span class="cf">contains</span>(<span class="cn">2</span>)  <span class="cc">// true</span>\n\n<span class="ck">let</span> a: <span class="ct">Set</span> = [<span class="cn">1</span>,<span class="cn">2</span>,<span class="cn">3</span>]\n<span class="ck">let</span> b: <span class="ct">Set</span> = [<span class="cn">3</span>,<span class="cn">4</span>,<span class="cn">5</span>]\na.<span class="cf">union</span>(b)        <span class="cc">// {1,2,3,4,5}</span>\na.<span class="cf">intersection</span>(b) <span class="cc">// {3}</span>\n\n<span class="cc">// Dictionary</span>\n<span class="ck">var</span> student: [<span class="ct">String</span>: <span class="ct">Any</span>] = [<span class="cs">"name"</span>: <span class="cs">"مراد"</span>, <span class="cs">"age"</span>: <span class="cn">27</span>]\nstudent[<span class="cs">"name"</span>]  <span class="cc">// Optional("مراد")</span>\nstudent[<span class="cs">"grade"</span>, default: <span class="cs">"N/A"</span>]  <span class="cc">// "N/A"</span>\n\n<span class="ck">for</span> (k, v) <span class="ck">in</span> student { <span class="cf">print</span>(<span class="cs">"\\(k): \\(v)"</span>) }</pre></div>`
            }
        ]
    },
    {
        id: 5,
        title: "الدوال والـ Closures",
        phase: "متوسط",
        icon: "brackets",
        topics: [
            {
                title: "الدوال بالتفصيل",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">func</span> <span class="cf">greet</span>(name: <span class="ct">String</span>) -> <span class="ct">String</span> { <span class="ck">return</span> <span class="cs">"مرحبا \\(name)"</span> }\n\n<span class="cc">// حذف label بـ _</span>\n<span class="ck">func</span> <span class="cf">mul</span>(_ a: <span class="ct">Int</span>, _ b: <span class="ct">Int</span>) -> <span class="ct">Int</span> { a * b }\n\n<span class="cc">// Default values</span>\n<span class="ck">func</span> <span class="cf">power</span>(base: <span class="ct">Int</span>, exp: <span class="ct">Int</span> = <span class="cn">2</span>) -> <span class="ct">Int</span> {\n    <span class="ck">var</span> r = <span class="cn">1</span>; <span class="ck">for</span> _ <span class="ck">in</span> <span class="cn">0</span>..&lt;<span class="cn">exp</span> { r *= base }; <span class="ck">return</span> r\n}\n\n<span class="cc">// Variadic</span>\n<span class="ck">func</span> <span class="cf">sum</span>(_ nums: <span class="ct">Int</span>...) -> <span class="ct">Int</span> { nums.<span class="cf">reduce</span>(<span class="cn">0</span>, +) }\n\n<span class="cc">// inout</span>\n<span class="ck">func</span> <span class="cf">swap</span>(_ a: <span class="ck">inout</span> <span class="ct">Int</span>, _ b: <span class="ck">inout</span> <span class="ct">Int</span>) {\n    <span class="ck">let</span> t = a; a = b; b = t\n}</pre></div>`
            },
            {
                title: "Closures",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// Closure بدون اسم</span>\n<span class="ck">let</span> greet = { (n: <span class="ct">String</span>) -> <span class="ct">String</span> <span class="ck">in</span> <span class="ck">return</span> <span class="cs">"مرحبا \\(n)"</span> }\n\n<span class="cc">// اختصارات — من الأكمل للأبسط</span>\nnames.<span class="cf">map</span> { (n: <span class="ct">String</span>) -> <span class="ct">String</span> <span class="ck">in</span> n.<span class="cf">uppercased</span>() }\nnames.<span class="cf">map</span> { n <span class="ck">in</span> n.<span class="cf">uppercased</span>() }\nnames.<span class="cf">map</span> { $<span class="cn">0</span>.<span class="cf">uppercased</span>() }\nnames.<span class="cf">map</span> { $<span class="cn">0</span>.<span class="cf">uppercased</span>() }  <span class="cc">// trailing closure</span>\n\n<span class="cc">// Closure capture</span>\n<span class="ck">func</span> <span class="cf">makeCounter</span>() -> () -> <span class="ct">Int</span> {\n    <span class="ck">var</span> count = <span class="cn">0</span>\n    <span class="ck">return</span> { count += <span class="cn">1</span>; <span class="ck">return</span> count }\n}\n<span class="ck">let</span> c = <span class="cf">makeCounter</span>()\nc()  <span class="cc">// 1</span>  c()  <span class="cc">// 2</span>  c()  <span class="cc">// 3</span></pre></div>`
            }
        ]
    },
    {
        id: 6,
        title: "OOP — Structs, Classes, Protocols",
        phase: "متوسط",
        icon: "box",
        topics: [
            {
                title: "Struct vs Class",
                content: `<div class="info-box p-4 mb-4"><p class="text-sm text-orange-300">🔑 <strong>Struct = Value Type</strong> (نسخة جديدة) | <strong>Class = Reference Type</strong> (نفس المرجع)</p></div><div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">Point</span> { <span class="ck">var</span> x, y: <span class="ct">Int</span> }\n<span class="ck">var</span> p1 = <span class="ct">Point</span>(x:<span class="cn">10</span>,y:<span class="cn">20</span>); <span class="ck">var</span> p2 = p1\np2.x = <span class="cn">99</span>; <span class="cf">print</span>(p1.x)  <span class="cc">// 10 — ما تأثرتش</span>\n\n<span class="ck">class</span> <span class="ct">Dog</span> {\n    <span class="ck">var</span> name: <span class="ct">String</span>\n    <span class="ck">init</span>(name: <span class="ct">String</span>) { <span class="ck">self</span>.name = name }\n}\n<span class="ck">let</span> d1 = <span class="ct">Dog</span>(name:<span class="cs">"Lucy"</span>); <span class="ck">let</span> d2 = d1\nd2.name = <span class="cs">"Roy"</span>; <span class="cf">print</span>(d1.name)  <span class="cc">// "Roy" — اتغير!</span></pre></div><div class="tip-box p-4"><p class="text-sm text-green-300">💡 <strong>استخدم Struct بالافتراض</strong>. Class بس لو محتاج وراثة.</p></div>`
            },
            {
                title: "Properties, Protocols, Extensions",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">Circle</span> {\n    <span class="ck">var</span> radius: <span class="ct">Double</span>\n    <span class="ck">var</span> area: <span class="ct">Double</span> { <span class="ck">get</span> { .pi * radius * radius } }\n    <span class="ck">var</span> maxR: <span class="ct">Double</span> = <span class="cn">100</span> {\n        <span class="ck">didSet</span> { <span class="ck">if</span> maxR > <span class="cn">200</span> { maxR = <span class="cn">200</span> } }\n    }\n    <span class="ck">static var</span> pi = <span class="cn">3.14159</span>\n    <span class="ck">mutating func</span> <span class="cf">double</span>() { radius *= <span class="cn">2</span> }\n}\n\n<span class="ck">protocol</span> <span class="ct">Drawable</span> { <span class="ck">var</span> color: <span class="ct">String</span> { <span class="ck">get set</span> }; <span class="ck">func</span> <span class="cf">draw</span>() }\n\n<span class="ck">extension</span> <span class="ct">Int</span> {\n    <span class="ck">var</span> isEven: <span class="ct">Bool</span> { <span class="ck">self</span> % <span class="cn">2</span> == <span class="cn">0</span> }\n    <span class="ck">func</span> <span class="cf">squared</span>() -> <span class="ct">Int</span> { <span class="ck">self</span> * <span class="ck">self</span> }\n}\n<span class="cn">4</span>.isEven  <span class="cc">// true</span>  |  <span class="cn">5</span>.<span class="cf">squared</span>()  <span class="cc">// 25</span></pre></div>`
            }
        ]
    },
    {
        id: 7,
        title: "Error Handling و Generics",
        phase: "متقدم",
        icon: "alert-triangle",
        topics: [
            {
                title: "Error Handling",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">enum</span> <span class="ct">NetErr</span>: <span class="ct">Error</span> {\n    <span class="ck">case</span> invalidURL, noConnection\n    <span class="ck">case</span> serverError(code: <span class="ct">Int</span>)\n}\n\n<span class="ck">func</span> <span class="cf">fetch</span>(from url: <span class="ct">String</span>) <span class="ck">throws</span> -> <span class="ct">String</span> {\n    <span class="ck">guard</span> url.<span class="cf">hasPrefix</span>(<span class="cs">"https"</span>) <span class="ck">else</span> { <span class="ck">throw</span> <span class="ct">NetErr</span>.invalidURL }\n    <span class="ck">return</span> <span class="cs">"data"</span>\n}\n\n<span class="ck">do</span> {\n    <span class="ck">let</span> d = <span class="ck">try</span> <span class="cf">fetch</span>(from: <span class="cs">"https://api.com"</span>)\n} <span class="ck">catch</span> <span class="ct">NetErr</span>.invalidURL {\n    <span class="cf">print</span>(<span class="cs">"رابط غلط"</span>)\n} <span class="ck">catch</span> { <span class="cf">print</span>(<span class="cs">"خطأ: \\(error)"</span>) }\n\n<span class="cc">// try? → Optional | try! → crash</span></pre></div>`
            },
            {
                title: "Generics",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">func</span> <span class="cf">swapAny</span>&lt;<span class="ct">T</span>&gt;(_ a: <span class="ck">inout</span> <span class="ct">T</span>, _ b: <span class="ck">inout</span> <span class="ct">T</span>) {\n    <span class="ck">let</span> t = a; a = b; b = t\n}\n\n<span class="ck">struct</span> <span class="ct">Stack</span>&lt;<span class="ct">E</span>&gt; {\n    <span class="ck">private var</span> items: [<span class="ct">E</span>] = []\n    <span class="ck">mutating func</span> <span class="cf">push</span>(_ i: <span class="ct">E</span>) { items.<span class="cf">append</span>(i) }\n    <span class="ck">mutating func</span> <span class="cf">pop</span>() -> <span class="ct">E</span>? { items.<span class="cf">popLast</span>() }\n}\n\n<span class="cc">// Generic Constraint</span>\n<span class="ck">func</span> <span class="cf">find</span>&lt;<span class="ct">T: Equatable</span>&gt;(of v: <span class="ct">T</span>, in a: [<span class="ct">T</span>]) -> <span class="ct">Int</span>? {\n    <span class="ck">for</span> (i, e) <span class="ck">in</span> a.<span class="cf">enumerated</span>() { <span class="ck">if</span> e == v { <span class="ck">return</span> i } }\n    <span class="ck">return nil</span>\n}</pre></div>`
            }
        ]
    },
    {
        id: 8,
        title: "SwiftUI — بناء الواجهات",
        phase: "متقدم",
        icon: "layout",
        topics: [
            {
                title: "المفاهيم الأساسية",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">ContentView</span>: <span class="ct">View</span> {\n    @State <span class="ck">private var</span> count = <span class="cn">0</span>\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">VStack</span>(spacing: <span class="cn">20</span>) {\n            <span class="ct">Text</span>(<span class="cs">"العدد: \\(count)"</span>)\n                .<span class="cf">font</span>(.<span class="cf">system</span>(size: <span class="cn">48</span>, weight: .<span class="cf">bold</span>))\n            <span class="ct">HStack</span> {\n                <span class="ct">Button</span>(<span class="cs">"−"</span>) { count -= <span class="cn">1</span> }\n                    .<span class="cf">frame</span>(width:<span class="cn">60</span>,height:<span class="cn">60</span>)\n                    .<span class="cf">background</span>(.<span class="ct">Color</span>.red)\n                    .<span class="cf">foregroundColor</span>(.white)\n                    .<span class="cf">clipShape</span>(<span class="ct">Circle</span>())\n                <span class="ct">Button</span>(<span class="cs">"+"</span>) { count += <span class="cn">1</span> }\n                    .<span class="cf">frame</span>(width:<span class="cn">60</span>,height:<span class="cn">60</span>)\n                    .<span class="cf">background</span>(.<span class="ct">Color</span>.orange)\n                    .<span class="cf">foregroundColor</span>(.white)\n                    .<span class="cf">clipShape</span>(<span class="ct">Circle</span>())\n            }\n        }\n    }\n}</pre></div>`
            },
            {
                title: "Navigation و MVVM",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">Todo</span>: <span class="ct">Identifiable</span>, <span class="ct">Codable</span> {\n    <span class="ck">let</span> id = <span class="ct">UUID</span>()\n    <span class="ck">var</span> title: <span class="ct">String</span>\n    <span class="ck">var</span> isDone = <span class="cn">false</span>\n}\n\n<span class="ck">class</span> <span class="ct">TodoVM</span>: <span class="ct">ObservableObject</span> {\n    @Published <span class="ck">var</span> todos: [<span class="ct">Todo</span>] = []\n    @Published <span class="ck">var</span> text = <span class="cs">""</span>\n    <span class="ck">func</span> <span class="cf">add</span>() {\n        <span class="ck">guard</span> !text.<span class="cf">isEmpty</span> <span class="ck">else</span> { <span class="ck">return</span> }\n        todos.<span class="cf">append</span>(<span class="ct">Todo</span>(title: text)); text = <span class="cs">""</span>\n    }\n}\n\n<span class="ck">struct</span> <span class="ct">TodoView</span>: <span class="ct">View</span> {\n    @StateObject <span class="ck">private var</span> vm = <span class="ct">TodoVM</span>()\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">NavigationStack</span> {\n            <span class="ct">List</span> { <span class="ck">ForEach</span>(vm.todos) { <span class="ct">Text</span>($<span class="cn">0</span>.title) } }\n            .<span class="cf">navigationTitle</span>(<span class="cs">"مهامي"</span>)\n        }\n    }\n}</pre></div><div class="tip-box p-4"><p class="text-sm text-green-300">💡 <strong>View</strong> تعرض بس | <strong>ViewModel</strong> فيه المنطق | <strong>Model</strong> هو البيانات</p></div>`
            }
        ]
    },
    {
        id: 9,
        title: "Strings ومعالجة النصوص",
        phase: "متوسط",
        icon: "type",
        topics: [
            {
                title: "String Methods بالتفصيل",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">let</span> str = <span class="cs">"  Hello, Swift!  "</span>\nstr.<span class="cf">trimmingCharacters</span>(in: .<span class="cf">whitespaces</span>)  <span class="cc">// "Hello, Swift!"</span>\nstr.<span class="cf">lowercased</span>()    <span class="cc">// "  hello, swift!  "</span>\nstr.<span class="cf">uppercased</span>()    <span class="cc">// "  HELLO, SWIFT!  "</span>\nstr.<span class="cf">replacingOccurrences</span>(of: <span class="cs">"Swift"</span>, with: <span class="cs">"World"</span>)\n\n<span class="cc">// Split و Join</span>\n<span class="cs">"a,b,c"</span>.<span class="cf">split</span>(separator: <span class="cs">","</span>).<span class="cf">map</span>(<span class="ct">String</span>.<span class="cf">init</span>)\n[<span class="cs">"a"</span>,<span class="cs">"b"</span>,<span class="cs">"c"</span>].<span class="cf">joined</span>(separator: <span class="cs">"-"</span>)  <span class="cc">// "a-b-c"</span>\n\n<span class="cc">// Prefix و Suffix</span>\n<span class="cs">"hello"</span>.<span class="cf">hasPrefix</span>(<span class="cs">"he"</span>)  <span class="cc">// true</span>\n<span class="cs">"hello"</span>.<span class="cf">hasSuffix</span>(<span class="cs">"lo"</span>)  <span class="cc">// true</span>\n\n<span class="cc">// Substring</span>\n<span class="ck">let</span> idx = str.<span class="cf">index</span>(str.<span class="cf">startIndex</span>, offsetBy: <span class="cn">7</span>)\n<span class="ct">String</span>(str[..&lt;idx])  <span class="cc">// "  Hello,"</span></pre></div>`
            },
            {
                title: "String Interpolation المتقدم",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">let</span> name = <span class="cs">"مراد"</span>\n<span class="ck">let</span> score = <span class="cn">95.6</span>\n\n<span class="cc">// Basic</span>\n<span class="cs">"النتيجة: \\(score)"</span>\n\n<span class="cc">// مع format specifier</span>\n<span class="cs">"النتيجة: \\(String(format: "%.1f", score))"</span>  <span class="cc">// "95.6"</span>\n\n<span class="cc">// String Interpolation Extension (Swift 5+)</span>\n<span class="ck">extension</span> <span class="ct">String.StringInterpolation</span> {\n    <span class="ck">mutating func</span> <span class="cf">appendInterpolation</span>(percent val: <span class="ct">Double</span>) {\n        <span class="cf">appendLiteral</span>(<span class="ct">String</span>(format: <span class="cs">"%.1f%%"</span>, val))\n    }\n}\n<span class="cs">"التقدم: \\(percent: 85.5)"</span>  <span class="cc">// "التقدم: 85.5%"</span>\n\n<span class="cc">// Multiline String</span>\n<span class="ck">let</span> html = <span class="cs">"""\n&lt;div&gt;\n    &lt;h1&gt;\\(name)&lt;/h1&gt;\n    &lt;p&gt;Score: \\(score)&lt;/p&gt;\n&lt;/div&gt;\n"""</span></pre></div>`
            }
        ]
    },
    {
        id: 10,
        title: "Enums المتقدمة",
        phase: "متوسط",
        icon: "list-ordered",
        topics: [
            {
                title: "Enums مع Associated Values",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">enum</span> <span class="ct">Weather</span> {\n    <span class="ck">case</span> sunny(temperature: <span class="ct">Int</span>)\n    <span class="ck">case</span> rainy(chance: <span class="ct">Int</span>)\n    <span class="ck">case</span> cloudy\n    <span class="ck">case</span> stormy(wind: <span class="ct">Double</span>, rain: <span class="ct">Bool</span>)\n}\n\n<span class="ck">let</span> today: <span class="ct">Weather</span> = .<span class="cf">sunny</span>(temperature: <span class="cn">35</span>)\n\n<span class="ck">switch</span> today {\n<span class="ck">case</span> .<span class="cf">sunny</span>(<span class="ck">let</span> temp):\n    <span class="cf">print</span>(<span class="cs">"مشمس بـ \\(temp) درجة"</span>)\n<span class="ck">case</span> .<span class="cf">rainy</span>(<span class="ck">let</span> chance):\n    <span class="cf">print</span>(<span class="cs">"ممطر \\(chance)%"</span>)\n<span class="ck">case</span> .<span class="cf">cloudy</span>:\n    <span class="cf">print</span>(<span class="cs">"غائم"</span>)\n<span class="ck">case</span> .<span class="cf">stormy</span>(<span class="ck">let</span> w, <span class="ck">let</span> r):\n    <span class="cf">print</span>(<span class="cs">"عاصفة: رياح \\(w)، مطر: \\(r)"</span>)\n}</pre></div>`
            },
            {
                title: "Enums كـ Data Types و Computed Properties",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">enum</span> <span class="ct">Direction</span>: <span class="ct">CaseIterable</span> {\n    <span class="ck">case</span> north, south, east, west\n\n    <span class="ck">var</span> isVertical: <span class="ct">Bool</span> {\n        <span class="ck">self</span> == .north || <span class="ck">self</span> == .south\n    }\n\n    <span class="ck">func</span> <span class="cf">turnRight</span>() -> <span class="ct">Direction</span> {\n        <span class="ck">switch self</span> {\n        <span class="ck">case</span> .north: <span class="ck">return</span> .east\n        <span class="ck">case</span> .east:  <span class="ck">return</span> .south\n        <span class="ck">case</span> .south: <span class="ck">return</span> .west\n        <span class="ck">case</span> .west:  <span class="ck">return</span> .north\n        }\n    }\n}\n\n<span class="ct">Direction</span>.<span class="cf">allCases</span>.<span class="cf">forEach</span> { <span class="cf">print</span>($<span class="cn">0</span>) }\n<span class="ct">Direction</span>.north.<span class="cf">turnRight</span>()  <span class="cc">// .east</span>\n\n<span class="cc">// Enum with raw value</span>\n<span class="ck">enum</span> <span class="ct">HttpStatus</span>: <span class="ct">Int</span> {\n    <span class="ck">case</span> ok = <span class="cn">200</span>\n    <span class="ck">case</span> notFound = <span class="cn">404</span>\n    <span class="ck">case</span> serverError = <span class="cn">500</span>\n}\n<span class="ct">HttpStatus</span>.ok.<span class="cf">rawValue</span>  <span class="cc">// 200</span></pre></div>`
            }
        ]
    },
    {
        id: 11,
        title: "Concurrency — async/await",
        phase: "متقدم",
        icon: "activity",
        topics: [
            {
                title: "async/await الأساسيات",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">func</span> <span class="cf">fetchUser</span>(id: <span class="ct">Int</span>) <span class="ck">async throws</span> -> <span class="ct">String</span> {\n    <span class="ck">let</span> url = <span class="ct">URL</span>(string: <span class="cs">"https://api.example.com/users/\\(id)"</span>)!\n    <span class="ck">let</span> (data, _) = <span class="ck">try await</span> <span class="ct">URLSession</span>.shared.<span class="cf">data</span>(from: url)\n    <span class="ck">return</span> <span class="ct">String</span>(data: data, encoding: .<span class="cf">utf8</span>) ?? <span class="cs">""</span>\n}\n\n<span class="cc">// استدعاء</span>\n<span class="ck">Task</span> {\n    <span class="ck">do</span> {\n        <span class="ck">let</span> user = <span class="ck">try await</span> <span class="cf">fetchUser</span>(id: <span class="cn">1</span>)\n        <span class="cf">print</span>(user)\n    } <span class="ck">catch</span> {\n        <span class="cf">print</span>(<span class="cs">"خطأ: \\(error)"</span>)\n    }\n}</pre></div><div class="info-box p-4"><p class="text-sm text-orange-300">📝 <strong>async</strong> = الدالة بتشتغل في الخلفية | <strong>await</strong> = استنى النتيجة بدون ما توقف الـ UI</p></div>`
            },
            {
                title: "TaskGroup و Parallel Execution",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// تشغيل عدة مهام بالتوازي</span>\n<span class="ck">func</span> <span class="cf">fetchAllPrices</span>() <span class="ck">async throws</span> -> [<span class="ct">Double</span>] {\n    <span class="ck">try await withThrowingTaskGroup</span>(of: <span class="ct">Double</span>.<span class="ck">self</span>) { group <span class="ck">in</span>\n        group.<span class="cf">addTask</span> { <span class="ck">try await</span> <span class="cf">fetchPrice</span>(from: <span class="cs">"store1"</span>) }\n        group.<span class="cf">addTask</span> { <span class="ck">try await</span> <span class="cf">fetchPrice</span>(from: <span class="cs">"store2"</span>) }\n        group.<span class="cf">addTask</span> { <span class="ck">try await</span> <span class="cf">fetchPrice</span>(from: <span class="cs">"store3"</span>) }\n\n        <span class="ck">var</span> prices: [<span class="ct">Double</span>] = []\n        <span class="ck">for try await</span> price <span class="ck">in</span> group { prices.<span class="cf">append</span>(price) }\n        <span class="ck">return</span> prices\n    }\n}\n\n<span class="cc">// @MainActor — تشغيل على الـ UI Thread</span>\n@<span class="ct">MainActor</span>\n<span class="ck">func</span> <span class="cf">updateUI</span>(with text: <span class="ct">String</span>) {\n    <span class="cc">// ده الآمن يحدث UI مباشرة</span>\n}\n\n<span class="cc">// AsyncSequence</span>\n<span class="ck">let</span> lines = url.lines.<span class="cf">async</span>\n<span class="ck">for await</span> line <span class="ck">in</span> lines { <span class="cf">print</span>(line) }</pre></div>`
            }
        ]
    },
    {
        id: 12,
        title: "Property Wrappers",
        phase: "متقدم",
        icon: "shield",
        topics: [
            {
                title: "@State, @Binding, @ObservedObject",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// @State — ملكية خاصة للـ View</span>\n<span class="ck">struct</span> <span class="ct">CounterView</span>: <span class="ct">View</span> {\n    @State <span class="ck">private var</span> count = <span class="cn">0</span>\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">Button</span>(<span class="cs">"Count: \\(count)"</span>) { count += <span class="cn">1</span> }\n    }\n}\n\n<span class="cc">// @Binding — مرجع مشترك بين Viewين</span>\n<span class="ck">struct</span> <span class="ct">ChildView</span>: <span class="ct">View</span> {\n    @Binding <span class="ck">var</span> count: <span class="ct">Int</span>\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">Button</span>(<span class="cs">"+1"</span>) { count += <span class="cn">1</span> }\n    }\n}\n\n<span class="cc">// @ObservedObject — ViewModel من بره</span>\n<span class="ck">struct</span> <span class="ct">ParentView</span>: <span class="ct">View</span> {\n    @StateObject <span class="ck">private var</span> vm = <span class="ct">MyVM</span>()\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">ChildView</span>(count: $vm.count)\n    }\n}</pre></div>`
            },
            {
                title: "@StateObject vs @ObservedObject vs @EnvironmentObject",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// @StateObject — الـ View هو اللي ينشئ الـ VM (OWN IT)</span>\n<span class="ck">struct</span> <span class="ct">ViewA</span>: <span class="ct">View</span> {\n    @StateObject <span class="ck">var</span> vm = <span class="ct">SettingsVM</span>()  <span class="cc">// ✅ أنشئه هنا</span>\n}\n\n<span class="cc">// @ObservedObject — الـ VM جاهز من بره (DON'T OWN IT)</span>\n<span class="ck">struct</span> <span class="ct">ViewB</span>: <span class="ct">View</span> {\n    @ObservedObject <span class="ck">var</span> vm: <span class="ct">SettingsVM</span>  <span class="cc">// ✅ جاني كـ parameter</span>\n}\n\n<span class="cc">// @EnvironmentObject — VM مشترك في كل التطبيق</span>\n@<span class="ct">main</span>\n<span class="ck">struct</span> <span class="ct">MyApp</span>: <span class="ct">App</span> {\n    @StateObject <span class="ck">var</span> vm = <span class="ct">SettingsVM</span>()\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">Scene</span> {\n        <span class="ct">WindowGroup</span> {\n            <span class="ct">ContentView</span>()\n                .<span class="cf">environmentObject</span>(vm)\n        }\n    }\n}\n\n<span class="ck">struct</span> <span class="ct">ContentView</span>: <span class="ct">View</span> {\n    @EnvironmentObject <span class="ck">var</span> vm: <span class="ct">SettingsVM</span>\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">Text</span>(<span class="cs">"\\(vm.username)"</span>)\n    }\n}</pre></div><div class="warning-box p-4"><p class="text-sm text-yellow-300">⚠️ استخدم <strong>@StateObject</strong> لما الـ View هو اللي ب ينشئ الـ ViewModel. استخدم <strong>@ObservedObject</strong> لما يقلك حد لقيتك بـ VM جاهز.</p></div>`
            }
        ]
    },
    {
        id: 13,
        title: "Codable و JSON Parsing",
        phase: "متقدم",
        icon: "file-json",
        topics: [
            {
                title: "Encoding و Decoding",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">User</span>: <span class="ct">Codable</span> {\n    <span class="ck">let</span> id: <span class="ct">Int</span>\n    <span class="ck">var</span> name: <span class="ct">String</span>\n    <span class="ck">var</span> email: <span class="ct">String</span>\n\n    <span class="cc">// Custom keys لو API keys مختلفة</span>\n    <span class="ck">enum</span> <span class="ct">CodingKeys</span>: <span class="ct">String</span>, <span class="ct">CodingKey</span> {\n        <span class="ck">case</span> id, name\n        <span class="ck">case</span> email = <span class="cs">"email_address"</span>\n    }\n}\n\n<span class="cc">// Decode JSON</span>\n<span class="ck">let</span> json = <span class="cs">"""\n{"id": 1, "name": "مراد", "email_address": "m@test.com"}\n"""</span>.<span class="cf">data</span>(using: .<span class="cf">utf8</span>)!\n\n<span class="ck">let</span> user = <span class="ck">try</span> <span class="ct">JSONDecoder</span>().<span class="cf">decode</span>(<span class="ct">User</span>.<span class="ck">self</span>, from: json)\n\n<span class="cc">// Encode to JSON</span>\n<span class="ck">let</span> data = <span class="ck">try</span> <span class="ct">JSONEncoder</span>().<span class="cf">encode</span>(user)</pre></div>`
            },
            {
                title: "Handling Arrays و Nested JSON",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">struct</span> <span class="ct">Post</span>: <span class="ct">Codable</span> {\n    <span class="ck">let</span> id: <span class="ct">Int</span>\n    <span class="ck">let</span> title: <span class="ct">String</span>\n    <span class="ck">let</span> userId: <span class="ct">Int</span>\n}\n\n<span class="cc">// Decode Array</span>\n<span class="ck">let</span> postsJSON = <span class="cs">"""[{"id":1,"title":"Hi","userId":1}]"""</span>\n<span class="ck">let</span> posts = <span class="ck">try</span> <span class="ct">JSONDecoder</span>().<span class="cf">decode</span>([<span class="ct">Post</span>].<span class="ck">self</span>, from: postsJSON.<span class="cf">data</span>(using: .<span class="cf">utf8</span>)!)\n\n<span class="cc">// Nested Objects</span>\n<span class="ck">struct</span> <span class="ct">Order</span>: <span class="ct">Codable</span> {\n    <span class="ck">let</span> id: <span class="ct">Int</span>\n    <span class="ck">let</span> items: [<span class="ct">Item</span>]\n    <span class="ck">let</span> total: <span class="ct">Double</span>\n}\n<span class="ck">struct</span> <span class="ct">Item</span>: <span class="ct">Codable</span> {\n    <span class="ck">let</span> name: <span class="ct">String</span>\n    <span class="ck">let</span> price: <span class="ct">Double</span>\n}\n\n<span class="cc">// Custom date strategy</span>\n<span class="ck">let</span> decoder = <span class="ct">JSONDecoder</span>\ndecoder.<span class="cf">dateDecodingStrategy</span> = .<span class="cf">iso8601</span></pre></div>`
            }
        ]
    },
    {
        id: 14,
        title: "Networking و URLSession",
        phase: "متقدم",
        icon: "globe",
        topics: [
            {
                title: "بناء Network Layer",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">enum</span> <span class="ct">HTTPMethod</span>: <span class="ct">String</span> { <span class="ck">case</span> get = <span class="cs">"GET"</span>; <span class="ck">case</span> post = <span class="cs">"POST"</span> }\n\n<span class="ck">struct</span> <span class="ct">APIError</span>: <span class="ct">Error</span> { <span class="ck">var</span> message: <span class="ct">String</span> }\n\n<span class="ck">class</span> <span class="ct">NetworkManager</span> {\n    <span class="ck">static let</span> shared = <span class="ct">NetworkManager</span>()\n    <span class="ck">private let</span> session = <span class="ct">URLSession</span>.shared\n\n    <span class="ck">func</span> <span class="cf">request</span>&lt;<span class="ct">T: Decodable</span>&gt;(\n        url: <span class="ct">String</span>,\n        method: <span class="ct">HTTPMethod</span> = .<span class="cf">get</span>,\n        body: <span class="ct">Data</span>? = <span class="cn">nil</span>\n    ) <span class="ck">async throws</span> -> <span class="ct">T</span> {\n        <span class="ck">guard let</span> url = <span class="ct">URL</span>(string: url) <span class="ck">else</span> {\n            <span class="ck">throw</span> <span class="ct">APIError</span>(message: <span class="cs">"Invalid URL"</span>)\n        }\n        <span class="ck">var</span> req = <span class="ct">URLRequest</span>(url: url)\n        req.<span class="cf">httpMethod</span> = method.<span class="cf">rawValue</span>\n        req.<span class="cf">setValue</span>(<span class="cs">"application/json"</span>, forHTTPHeaderField: <span class="cs">"Content-Type"</span>)\n        <span class="ck">if let</span> body = body { req.<span class="cf">httpBody</span> = body }\n\n        <span class="ck">let</span> (data, resp) = <span class="ck">try await</span> session.<span class="cf">data</span>(for: req)\n        <span class="ck">guard</span> (resp <span class="ck">as?</span> <span class="ct">HTTPURLResponse</span>)?.<span class="cf">statusCode</span> == <span class="cn">200</span> <span class="ck">else</span> {\n            <span class="ck">throw</span> <span class="ct">APIError</span>(message: <span class="cs">"Server error"</span>)\n        }\n        <span class="ck">return try</span> <span class="ct">JSONDecoder</span>().<span class="cf">decode</span>(<span class="ct">T</span>.<span class="ck">self</span>, from: data)\n    }\n}\n\n<span class="cc">// استخدام</span>\n<span class="ck">let</span> posts: [<span class="ct">Post</span>] = <span class="ck">try await</span> <span class="ct">NetworkManager</span>.shared.<span class="cf">request</span>(\n    url: <span class="cs">"https://jsonplaceholder.typicode.com/posts"</span>\n)</pre></div>`
            }
        ]
    },
    {
        id: 15,
        title: "UserDefaults والتخزين المحلي",
        phase: "متوسط",
        icon: "hard-drive",
        topics: [
            {
                title: "UserDefaults بالتفصيل",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">let</span> defaults = <span class="ct">UserDefaults</span>.standard\n\n<span class="cc">// حفظ قيم</span>\ndefaults.<span class="cf">set</span>(<span class="cs">"مراد"</span>, forKey: <span class="cs">"username"</span>)\ndefaults.<span class="cf">set</span>(<span class="cn">true</span>, forKey: <span class="cs">"isLoggedIn"</span>)\ndefaults.<span class="cf">set</span>(<span class="cn">27</span>, forKey: <span class="cs">"age"</span>)\ndefaults.<span class="cf">set</span>([<span class="cn">1</span>,<span class="cn">2</span>,<span class="cn">3</span>], forKey: <span class="cs">"favorites"</span>)\n\n<span class="cc">// قراءة قيم</span>\n<span class="ck">let</span> name = defaults.<span class="cf">string</span>(forKey: <span class="cs">"username"</span>)  <span class="cc">// String?</span>\n<span class="ck">let</span> isLogged = defaults.<span class="cf">bool</span>(forKey: <span class="cs">"isLoggedIn"</span>)  <span class="cc">// false default</span>\n<span class="ck">let</span> arr = defaults.<span class="cf">array</span>(forKey: <span class="cs">"favorites"</span>) <span class="ck">as</span>? [<span class="ct">Int</span>]  <span class="cc">// [Int]?</span>\n\n<span class="cc">// حذف</span>\ndefaults.<span class="cf">removeObject</span>(forKey: <span class="cs">"username"</span>)</pre></div><div class="warning-box p-4 mb-4"><p class="text-sm text-yellow-300">⚠️ UserDefaults مش مصمم لبيانات كبيرة. للاستخدام الخفيف بس (إعدادات، tokens، إلخ).</p></div>`
            },
            {
                title: "Property Wrapper مخصص لـ UserDefaults",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre>@<span class="ct">propertyWrapper</span>\n<span class="ck">struct</span> <span class="ct">UserDefault</span>&lt;<span class="ct">T</span>&gt; {\n    <span class="ck">let</span> key: <span class="ct">String</span>\n    <span class="ck">let</span> defaultValue: <span class="ct">T</span>\n\n    <span class="ck">var</span> wrappedValue: <span class="ct">T</span> {\n        <span class="ck">get</span> { <span class="ct">UserDefaults</span>.standard.<span class="cf">object</span>(forKey: key) <span class="ck">as</span>? <span class="ct">T</span> ?? defaultValue }\n        <span class="ck">set</span> { <span class="ct">UserDefaults</span>.standard.<span class="cf">set</span>(newValue, forKey: key) }\n    }\n}\n\n<span class="cc">// استخدام</span>\n<span class="ck">struct</span> <span class="ct">AppSettings</span> {\n    @<span class="ct">UserDefault</span>(key: <span class="cs">"username"</span>, defaultValue: <span class="cs">""</span>)\n    <span class="ck">static var</span> username: <span class="ct">String</span>\n\n    @<span class="ct">UserDefault</span>(key: <span class="cs">"isDark"</span>, defaultValue: <span class="cn">false</span>)\n    <span class="ck">static var</span> isDarkMode: <span class="ct">Bool</span>\n\n    @<span class="ct">UserDefault</span>(key: <span class="cs">"launchCount"</span>, defaultValue: <span class="cn">0</span>)\n    <span class="ck">static var</span> launchCount: <span class="ct">Int</span>\n}\n\n<span class="ct">AppSettings</span>.username = <span class="cs">"مراد"</span>  <span class="cc">// محفوظ تلقائياً</span>\n<span class="cf">print</span>(<span class="ct">AppSettings</span>.username)  <span class="cc">// "مراد"</span></pre></div>`
            }
        ]
    },
    {
        id: 16,
        title: "SwiftUI المتقدم — Animations",
        phase: "متقدم",
        icon: "sparkles",
        topics: [
            {
                title: "Implicit و Explicit Animations",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// 1. Implicit — .animation على الـ modifier</span>\n<span class="ct">Circle</span>()\n    .<span class="cf">fill</span>(.<span class="ct">Color</span>.orange)\n    .<span class="cf">frame</span>(width: isBig ? <span class="cn">150</span> : <span class="cn">80</span>, height: isBig ? <span class="cn">150</span> : <span class="cn">80</span>)\n    .<span class="cf">animation</span>(.<span class="cf">easeInOut</span>(duration: <span class="cn">0.3</span>), value: isBig)\n\n<span class="cc">// 2. Explicit — withAnimation { }</span>\n<span class="ct">Button</span>(<span class="cs">"Toggle"</span>) {\n    <span class="ck">withAnimation</span>(.<span class="cf">spring</span>(response: <span class="cn">0.5</span>, dampingFraction: <span class="cn">0.7</span>)) {\n        isBig.<span class="cf">toggle</span>()\n    }\n}\n\n<span class="cc">// 3. Transition</span>\n<span class="ck">if</span> show {\n    <span class="ct">Text</span>(<span class="cs">"Hello!"</span>)\n        .<span class="cf">transition</span>(.<span class="cf">asymmetric</span>(\n            insertion: .<span class="cf">scale</span>.<span class="cf">combined</span>(with: .<span class="cf">opacity</span>),\n            removal: .<span class="cf">slide</span>\n        ))\n}\n\n<span class="cc">// 4. Custom Animation</span>\n<span class="ck">let</span> custom = <span class="ct">Animation</span>.<span class="cf">interpolatingSpring</span>(\n    stiffness: <span class="cn">200</span>, damping: <span class="cn">15</span>\n)</pre></div>`
            },
            {
                title: "matchedGeometryEffect",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre>@<span class="ct">State</span> <span class="ck">private var</span> expanded = <span class="cn">false</span>\n@<span class="ct">Namespace</span> <span class="ck">private var</span> anim\n\n<span class="ct">VStack</span> {\n    <span class="ck">if</span> expanded {\n        <span class="ct">RoundedRectangle</span>(cornerRadius: <span class="cn">20</span>)\n            .<span class="cf">fill</span>(.<span class="ct">Color</span>.orange)\n            .<span class="cf">frame</span>(height: <span class="cn">300</span>)\n            .<span class="cf">matchedGeometryEffect</span>(id: <span class="cs">"card"</span>, in: anim)\n    } <span class="ck">else</span> {\n        <span class="ct">RoundedRectangle</span>(cornerRadius: <span class="cn">12</span>)\n            .<span class="cf">fill</span>(.<span class="ct">Color</span>.orange)\n            .<span class="cf">frame</span>(width: <span class="cn">80</span>, height: <span class="cn">80</span>)\n            .<span class="cf">matchedGeometryEffect</span>(id: <span class="cs">"card"</span>, in: anim)\n    }\n}\n.<span class="cf">animation</span>(.<span class="cf">spring</span>(), value: expanded)\n\n<span class="ct">Button</span>(<span class="cs">"Toggle"</span>) {\n    <span class="ck">withAnimation</span> { expanded.<span class="cf">toggle</span>() }\n}</pre></div><div class="tip-box p-4"><p class="text-sm text-green-300">💡 <strong>matchedGeometryEffect</strong> بيخلّي عنصرين يتحولوا سلس بين شكلين — مثالي لـ Hero transitions.</p></div>`
            }
        ]
    },
    {
        id: 17,
        title: "Architecture — MVVM بالتفصيل",
        phase: "متقدم",
        icon: "blocks",
        topics: [
            {
                title: "بناء MVVM كامل",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// ========== MODEL ==========</span>\n<span class="ck">struct</span> <span class="ct">User</span>: <span class="ct">Codable</span>, <span class="ct">Identifiable</span> {\n    <span class="ck">let</span> id: <span class="ct">Int</span>\n    <span class="ck">var</span> name: <span class="ct">String</span>\n    <span class="ck">var</span> email: <span class="ct">String</span>\n}\n\n<span class="cc">// ========== SERVICE ==========</span>\n<span class="ck">class</span> <span class="ct">UserService</span> {\n    <span class="ck">static let</span> shared = <span class="ct">UserService</span>()\n    <span class="ck">func</span> <span class="cf">getUsers</span>() <span class="ck">async throws</span> -> [<span class="ct">User</span>] {\n        <span class="ck">let</span> url = <span class="ct">URL</span>(string: <span class="cs">"https://jsonplaceholder.typicode.com/users"</span>)!\n        <span class="ck">let</span> (data, _) = <span class="ck">try await</span> <span class="ct">URLSession</span>.shared.<span class="cf">data</span>(from: url)\n        <span class="ck">return try</span> <span class="ct">JSONDecoder</span>().<span class="cf">decode</span>([<span class="ct">User</span>].<span class="ck">self</span>, from: data)\n    }\n}\n\n<span class="cc">// ========== VIEWMODEL ==========</span>\n@<span class="ct">MainActor</span>\n<span class="ck">class</span> <span class="ct">UserListVM</span>: <span class="ct">ObservableObject</span> {\n    @Published <span class="ck">var</span> users: [<span class="ct">User</span>] = []\n    @Published <span class="ck">var</span> isLoading = <span class="cn">false</span>\n    @Published <span class="ck">var</span> errorMsg: <span class="ct">String</span>?\n\n    <span class="ck">func</span> <span class="cf">loadUsers</span>() <span class="ck">async</span> {\n        isLoading = <span class="cn">true</span>; errorMsg = <span class="cn">nil</span>\n        <span class="ck">do</span> {\n            users = <span class="ck">try await</span> <span class="ct">UserService</span>.shared.<span class="cf">getUsers</span>()\n        } <span class="ck">catch</span> { errorMsg = error.<span class="cf">localizedDescription</span> }\n        isLoading = <span class="cn">false</span>\n    }\n}\n\n<span class="cc">// ========== VIEW ==========</span>\n<span class="ck">struct</span> <span class="ct">UserListView</span>: <span class="ct">View</span> {\n    @StateObject <span class="ck">private var</span> vm = <span class="ct">UserListVM</span>()\n    <span class="ck">var</span> body: <span class="ck">some</span> <span class="ct">View</span> {\n        <span class="ct">List</span>(vm.users) { user <span class="ck">in</span>\n            <span class="ct">VStack</span>(alignment: .<span class="cf">leading</span>) {\n                <span class="ct">Text</span>(user.name).<span class="cf">font</span>(.<span class="cf">headline</span>)\n                <span class="ct">Text</span>(user.email).<span class="cf">font</span>(.<span class="cf">subheadline</span>).<span class="cf">foregroundColor</span>(.<span class="cf">secondary</span>)\n            }\n        }\n        .<span class="cf">overlay</span> {\n            <span class="ck">if</span> vm.isLoading { <span class="ct">ProgressView</span>() }\n        }\n        .<span class="cf">alert</span>(<span class="cs">"خطأ"</span>, isPresented: .<span class="cf">constant</span>(vm.errorMsg != <span class="cn">nil</span>) {\n            <span class="ct">Button</span>(<span class="cs">"OK"</span>, role: .<span class="cf">cancel</span>) {}\n        } message: { <span class="ct">Text</span>(vm.errorMsg ?? <span class="cs">""</span>) }\n        .<span class="cf">task</span> { <span class="ck">await</span> vm.<span class="cf">loadUsers</span>() }\n    }\n}</pre></div>`
            }
        ]
    },
    {
        id: 18,
        title: "Testing — Unit و UI Tests",
        phase: "متقدم",
        icon: "check-circle",
        topics: [
            {
                title: "Unit Tests",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="ck">import</span> XCTest\n@<span class="ck">testable import</span> MyApp\n\n<span class="ck">class</span> <span class="ct">MathTests</span>: <span class="ct">XCTestCase</span> {\n\n    <span class="ck">func</span> <span class="cf">testAddition</span>() {\n        <span class="ct">XCTAssertEqual</span>(<span class="cf">add</span>(<span class="cn">2</span>, <span class="cn">3</span>), <span class="cn">5</span>)\n    }\n\n    <span class="ck">func</span> <span class="cf">testDivision</span>() {\n        <span class="ct">XCTAssertEqual</span>(<span class="cf">divide</span>(<span class="cn">10</span>, <span class="cn">2</span>), <span class="cn">5</span>)\n    }\n\n    <span class="ck">func</span> <span class="cf">testDivideByZero</span>() {\n        <span class="ct">XCTAssertNil</span>(<span class="cf">divide</span>(<span class="cn">10</span>, <span class="cn">0</span>))\n    }\n\n    <span class="ck">func</span> <span class="cf">testPerformance</span>() {\n        <span class="cf">measure</span> {\n            <span class="ck">_</span> = <span class="cf">heavyCalculation</span>(n: <span class="cn">10000</span>)\n        }\n    }\n}\n\n<span class="cc">// Async test</span>\n<span class="ck">class</span> <span class="ct">NetworkTests</span>: <span class="ct">XCTestCase</span> {\n    <span class="ck">func</span> <span class="cf">testFetchUsers</span>() <span class="ck">async throws</span> {\n        <span class="ck">let</span> users = <span class="ck">try await</span> <span class="ct">UserService</span>.shared.<span class="cf">getUsers</span>()\n        <span class="ct">XCTAssertFalse</span>(users.<span class="cf">isEmpty</span>)\n        <span class="ct">XCTAssertEqual</span>(users.<span class="cf">count</span>, <span class="cn">10</span>)\n    }\n}</pre></div>`
            },
            {
                title: "UI Tests و Testing ViewModels",
                content: `<div class="code-block p-4 mb-4 text-sm leading-relaxed"><pre><span class="cc">// Testing ViewModel مباشرة</span>\n@<span class="ck">testable import</span> MyApp\n\n<span class="ck">class</span> <span class="ct">UserVMTests</span>: <span class="ct">XCTestCase</span> {\n    <span class="ck">func</span> <span class="cf">testLoadUsersSuccess</span>() <span class="ck">async</span> {\n        <span class="ck">let</span> vm = <span class="ct">UserListVM</span>()\n        <span class="ct">XCTAssertTrue</span>(vm.isLoading)\n\n        <span class="ck">await</span> vm.<span class="cf">loadUsers</span>()\n\n        <span class="ct">XCTAssertFalse</span>(vm.isLoading)\n        <span class="ct">XCTAssertNil</span>(vm.errorMsg)\n        <span class="ct">XCTAssertEqual</span>(vm.users.<span class="cf">count</span>, <span class="cn">10</span>)\n    }\n}\n\n<span class="cc">// UI Test</span>\n<span class="ck">class</span> <span class="ct">MyAppUITests</span>: <span class="ct">XCTestCase</span> {\n    <span class="ck">let</span> app = <span class="ct">XCUIApplication</span>()\n\n    <span class="ck">override func</span> <span class="cf">setUp</span>() {\n        app.<span class="cf">launch</span>()\n    }\n\n    <span class="ck">func</span> <span class="cf">testButtonTap</span>() {\n        app.<span class="cf">buttons</span>[<span class="cs">"Counter"</span>].<span class="cf">tap</span>()\n        <span class="ck">let</span> label = app.<span class="cf">staticTexts</span>[<span class="cs">"Count: 1"</span>]\n        <span class="ct">XCTAssertTrue</span>(label.<span class="cf">exists</span>)\n    }\n}</pre></div><div class="tip-box p-4"><p class="text-sm text-green-300">💡 <strong>Test ViewModel لوحدو</strong> — ده أسرع وأسهل من UI Tests. UI Tests للـ Happy Path بس.</p></div>`
            }
        ]
    }
];


/* ===================================================================
   HELPERS — ألوان المراحل
   =================================================================== */
const phaseColors = {
    'تمهيد': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    'أساسيات': 'text-green-400 border-green-500/30 bg-green-500/10',
    'متوسط': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    'متقدم': 'text-purple-400 border-purple-500/30 bg-purple-500/10'
};
const phaseDotColors = {
    'تمهيد': 'bg-cyan-400',
    'أساسيات': 'bg-green-400',
    'متوسط': 'bg-blue-400',
    'متقدم': 'bg-purple-400'
};

/* ===================================================================
   THEME — إدارة أوضاع الألوان (فاتح / داكن / ليلي)
   =================================================================== */
function getTheme() {
    return localStorage.getItem('swift-theme') || 'dark';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('swift-theme', theme);
    updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
    document.querySelectorAll('.theme-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-theme-btn') === theme);
    });
}


/* ===================================================================
   STORAGE — القراءة والكتابة في localStorage
   =================================================================== */
function getProgress() {
    return JSON.parse(localStorage.getItem('swift-content-progress') || '{}');
}
function saveProgress(s) {
    localStorage.setItem('swift-content-progress', JSON.stringify(s));
}


/* ===================================================================
   RESOURCE FILTER — فلترة كروت المصادر
   =================================================================== */
function filterRes(tag) {
    document.querySelectorAll('.res-filter').forEach(b => {
        b.classList.remove('active', 'bg-white/5', 'text-white');
        b.classList.add('text-neutral-400');
    });
    const a = document.querySelector(`.res-filter[data-filter="${tag}"]`);
    if (a) {
        a.classList.add('active', 'bg-white/5', 'text-white');
        a.classList.remove('text-neutral-400');
    }
    document.querySelectorAll('.resource-card').forEach(c => {
        if (tag === 'all') {
            c.style.display = '';
        } else {
            c.style.display = (c.getAttribute('data-tags') || '').includes(tag) ? '' : 'none';
        }
    });
}


/* ===================================================================
   TOC — فهرس المحتوى
   =================================================================== */
function toggleTOC() {
    const b = document.getElementById('toc-body');
    const c = document.getElementById('toc-chev');
    const btn = document.getElementById('toc-toggle-btn');
    const isOpen = b.classList.toggle('open');
    c.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    if (btn) btn.setAttribute('aria-expanded', isOpen);
}

function renderTOC() {
    const g = document.getElementById('toc-grid');
    const s = getProgress();
    let t = 0, c = 0;
    DATA.forEach(d => { t += d.topics.length; c += (s[d.id] || []).length; });
    document.getElementById('toc-done').textContent = c;
    document.getElementById('toc-total').textContent = t;
    g.innerHTML = DATA.map(d => {
        const ck = s[d.id] || [];
        const ad = ck.length === d.topics.length;
        const p = d.topics.length > 0 ? Math.round((ck.length / d.topics.length) * 100) : 0;
        const pc = phaseColors[d.phase] || phaseColors['أساسيات'];
        const dc = phaseDotColors[d.phase] || 'bg-green-400';
        return `<button onclick="scrollToStep(${d.id})" class="toc-item flex items-center gap-3 p-3 rounded-xl border ${ad ? 'border-green-500/20' : 'border-white/5'} text-right w-full" data-step="${d.id}"><div class="w-8 h-8 rounded-lg ${ad ? 'bg-green-500' : 'bg-white/5'} flex items-center justify-center text-xs font-bold flex-shrink-0 ${ad ? 'text-white' : 'text-neutral-500'}">${ad ? '✓' : d.id}</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><span class="w-1.5 h-1.5 rounded-full ${dc} flex-shrink-0"></span><span class="text-sm font-semibold ${ad ? 'text-green-400' : 'text-white'} truncate">${d.title}</span></div><div class="flex items-center gap-2 mr-3.5"><span class="text-[10px] px-1.5 py-0 rounded font-semibold border ${pc}">${d.phase}</span><span class="text-[10px] text-neutral-500">${ck.length}/${d.topics.length}</span><div class="flex-1 h-1 rounded-full bg-white/5 overflow-hidden max-w-[50px]"><div class="h-full rounded-full ${ad ? 'bg-green-500' : 'bg-orange-500'} transition-all duration-500" style="width:${p}%"></div></div></div></div><i data-lucide="chevron-left" class="w-3.5 h-3.5 text-neutral-600 flex-shrink-0"></i></button>`;
    }).join('');
    lucide.createIcons();
}

function scrollToStep(sid) {
    const e = document.getElementById(`step-${sid}`);
    if (e) {
        const y = e.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function updateActiveTOC() {
    const sy = window.scrollY + 120;
    let a = null;
    DATA.forEach(d => {
        const e = document.getElementById(`step-${d.id}`);
        if (e && e.offsetTop <= sy) a = d.id;
    });
    document.querySelectorAll('.toc-item').forEach(i => {
        const s = parseInt(i.getAttribute('data-step'));
        i.classList.toggle('active', s === a);
    });
}


/* ===================================================================
   MAIN CONTENT — بناء المحتوى الرئيسي (يُستدعى مرة واحدة فقط)
   =================================================================== */
function buildMainContent() {
    const c = document.getElementById('main-content');
    const s = getProgress();

    c.innerHTML = DATA.map((d, si) => {
        const ck = s[d.id] || [];
        const ad = ck.length === d.topics.length;
        const pc = phaseColors[d.phase] || phaseColors['أساسيات'];
        const sp = d.topics.length > 0 ? Math.round((ck.length / d.topics.length) * 100) : 0;

        return `<div class="mb-10" id="step-${d.id}" style="animation:fadeInUp 0.6s ease-out ${si * 0.05}s forwards;opacity:0">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 rounded-xl ${ad ? 'bg-green-500' : 'bg-white/5'} flex items-center justify-center text-sm font-bold ${ad ? 'text-white' : 'text-neutral-400'} transition-all duration-300" data-step-icon="${d.id}">${ad ? '✓' : d.id}</div>
                <div class="flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="px-2 py-0.5 rounded-full text-xs font-semibold border ${pc}">${d.phase}</span>
                        <span data-step-badge="${d.id}">${ad ? '<span class="completion-badge px-2 py-0.5 rounded-full text-xs font-semibold text-white">✓ مكتمل</span>' : ''}</span>
                        <span class="text-xs text-neutral-500 mr-auto" data-step-count="${d.id}">${ck.length}/${d.topics.length}</span>
                    </div>
                    <h2 class="text-xl md:text-2xl font-bold mt-1">${d.title}</h2>
                </div>
            </div>
            <div class="mr-[52px] mb-3 h-1 rounded-full bg-white/5 overflow-hidden">
                <div class="h-full rounded-full ${ad ? 'bg-green-500' : 'bg-orange-500'} transition-all duration-700" style="width:${sp}%" data-step-bar="${d.id}"></div>
            </div>
            <div class="flex flex-col gap-3">${d.topics.map((tp, ti) => {
            const ic = ck.includes(ti);
            return `<div class="rounded-2xl border ${ic ? 'border-green-500/30 bg-green-500/[0.02]' : 'border-white/10 bg-white/[0.02]'} overflow-hidden transition-all duration-300" data-topic-card="${d.id}-${ti}">
                <button onclick="toggleTopic(${d.id},${ti})" class="w-full p-4 md:p-5 flex items-center gap-3 text-right" aria-expanded="false" data-topic-btn="${d.id}-${ti}">
                    <input type="checkbox" class="custom-checkbox" ${ic ? 'checked' : ''} onclick="event.stopPropagation();toggleCheck(${d.id},${ti})" data-topic-cb="${d.id}-${ti}">
                    <span class="flex-1 font-semibold ${ic ? 'text-neutral-500 line-through' : 'text-white'} transition-colors duration-300" data-topic-title="${d.id}-${ti}">${tp.title}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 text-neutral-500 transition-transform duration-300 flex-shrink-0" data-topic-chev="${d.id}-${ti}"></i>
                </button>
                <div class="sub-expand" data-topic-sub="${d.id}-${ti}">
                    <div class="px-4 md:px-5 pb-5 pt-0 border-t border-white/5">
                        <div class="pt-4 text-neutral-300 text-sm leading-relaxed [&_h4]:text-white [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-4 [&_h5]:font-bold [&_h5]:mb-1 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1">${tp.content}</div>
                    </div>
                </div>
            </div>`;
        }).join('')}</div>
        </div>`;
    }).join('');

        // تطبيق الوضع المحفوظ
    document.documentElement.setAttribute('data-theme', getTheme());
    updateThemeButtons(getTheme());

    lucide.createIcons();
}


/* ===================================================================
   SELECTIVE UPDATES — تحديث فقط اللي اتغيّر (بدون إعادة بناء DOM)
   =================================================================== */
function updateCheckboxVisual(sid, ti, checked) {
    const cb = document.querySelector(`[data-topic-cb="${sid}-${ti}"]`);
    const title = document.querySelector(`[data-topic-title="${sid}-${ti}"]`);
    const card = document.querySelector(`[data-topic-card="${sid}-${ti}"]`);
    if (cb) cb.checked = checked;
    if (title) {
        title.classList.toggle('text-neutral-500', checked);
        title.classList.toggle('line-through', checked);
        title.classList.toggle('text-white', !checked);
    }
    if (card) {
        card.classList.toggle('border-green-500/30', checked);
        card.classList.toggle('bg-green-500/[0.02]', checked);
        card.classList.toggle('border-white/10', !checked);
        card.classList.toggle('bg-white/[0.02]', !checked);
    }
}

function updateStepProgress(sid, checkedItems) {
    const d = DATA.find(x => x.id === sid);
    if (!d) return;
    const allDone = checkedItems.length === d.topics.length;
    const pct = d.topics.length > 0 ? Math.round((checkedItems.length / d.topics.length) * 100) : 0;

    // أيقونة القسم
    const icon = document.querySelector(`[data-step-icon="${sid}"]`);
    if (icon) {
        icon.classList.toggle('bg-green-500', allDone);
        icon.classList.toggle('bg-white/5', !allDone);
        icon.classList.toggle('text-white', allDone);
        icon.classList.toggle('text-neutral-400', !allDone);
        icon.textContent = allDone ? '✓' : sid;
    }

    // بروجريس بار القسم
    const bar = document.querySelector(`[data-step-bar="${sid}"]`);
    if (bar) {
        bar.style.width = pct + '%';
        bar.classList.toggle('bg-green-500', allDone);
        bar.classList.toggle('bg-orange-500', !allDone);
    }

    // badge "مكتمل"
    const badgeWrap = document.querySelector(`[data-step-badge="${sid}"]`);
    if (badgeWrap) {
        const existing = badgeWrap.querySelector('.completion-badge');
        if (allDone && !existing) {
            badgeWrap.innerHTML = '<span class="completion-badge px-2 py-0.5 rounded-full text-xs font-semibold text-white">✓ مكتمل</span>';
        } else if (!allDone && existing) {
            badgeWrap.innerHTML = '';
        }
    }

    // نص العدد
    const countEl = document.querySelector(`[data-step-count="${sid}"]`);
    if (countEl) countEl.textContent = `${checkedItems.length}/${d.topics.length}`;
}

function updateGlobalProgress(s) {
    let total = 0, done = 0;
    DATA.forEach(d => { total += d.topics.length; done += (s[d.id] || []).length; });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('nav-pct').textContent = pct + '%';
    document.getElementById('nav-bar').style.width = pct + '%';
}


/* ===================================================================
   TOGGLE FUNCTIONS — فتح/قفل الأكورديون
   =================================================================== */
function toggleTopic(sid, ti) {
    const sub = document.querySelector(`[data-topic-sub="${sid}-${ti}"]`);
    const chev = document.querySelector(`[data-topic-chev="${sid}-${ti}"]`);
    const btn = document.querySelector(`[data-topic-btn="${sid}-${ti}"]`);
    if (sub && chev) {
        const isOpen = sub.classList.toggle('open');
        chev.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        if (btn) btn.setAttribute('aria-expanded', isOpen);
    }
}


/* ===================================================================
   CHECKBOX — تحديث التقدم بدون إعادة بناء الصفحة
   =================================================================== */
function toggleCheck(sid, ti) {
    const s = getProgress();
    if (!s[sid]) s[sid] = [];
    const i = s[sid].indexOf(ti);
    if (i > -1) {
        s[sid].splice(i, 1);
    } else {
        s[sid].push(ti);
        const d = DATA.find(x => x.id === sid);
        if (s[sid].length === d.topics.length) {
            showToast(`🎉 أكملت "${d.title}"!`);
        }
    }
    saveProgress(s);

    // تحديث بصري محلي — بدون إعادة بناء الـ DOM
    const isChecked = s[sid].includes(ti);
    updateCheckboxVisual(sid, ti, isChecked);
    updateStepProgress(sid, s[sid]);
    updateGlobalProgress(s);
    renderTOC();
}


/* ===================================================================
   RESET — مسح كل التقدم
   =================================================================== */
function resetAll() {
    if (confirm('متأكد إنك عايز تمسح كل التقدم؟')) {
        localStorage.removeItem('swift-content-progress');
        buildMainContent();
        updateGlobalProgress({});
        renderTOC();
        showToast('🗑️ تم مسح التقدم');
        // ترجيع الوضع للداكن (الافتراضي) عند المسح
        setTheme('dark');
    }
}
    
/* ===================================================================
   TOAST — إشعار منبثق
   =================================================================== */
function showToast(m) {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast px-5 py-3 rounded-xl bg-neutral-850 border border-white/10 text-sm font-semibold shadow-2xl';
    t.style.backdropFilter = 'blur(12px)';
    t.textContent = m;
    c.appendChild(t);
    setTimeout(() => { if (t.parentNode) t.remove(); }, 3200);
}


/* ===================================================================
   SMOOTH SCROLL — تنقل سلس للـ anchors
   =================================================================== */
function smoothScrollTo(sel) {
    const t = document.querySelector(sel);
    if (t) {
        const y = t.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}


/* ===================================================================
   SCROLL EVENTS — زر العودة + تتبع الـ TOC النشط
   =================================================================== */
let scrollTick = false;
window.addEventListener('scroll', () => {
    const b = document.getElementById('btt');
    if (b) {
        b.style.opacity = window.scrollY > 400 ? '1' : '0';
        b.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    }
    if (!scrollTick) {
        requestAnimationFrame(() => {
            updateActiveTOC();
            scrollTick = false;
        });
        scrollTick = true;
    }
});


/* ===================================================================
   INIT — التهيئة عند تحميل الصفحة
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // بناء المحتوى مرة واحدة
    buildMainContent();

    // تحديث التقدم العام
    updateGlobalProgress(getProgress());

    // بناء الفهرس
    renderTOC();

    // تهيئة أيقونات Lucide
    lucide.createIcons();

    // تنقل سلس لكل الروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            smoothScrollTo(a.getAttribute('href'));
        });
    });

    // إغلاق قائمة الموبايل عند الضغط على رابط
    document.querySelectorAll('.mob-link').forEach(a => {
        a.addEventListener('click', () => {
            document.getElementById('mob-menu').classList.add('hidden');
        });
    });

    // على الموبايل: أغلق الفهرس بشكل افتراضي
    if (window.innerWidth < 768) {
        const tb = document.getElementById('toc-body');
        const tc = document.getElementById('toc-chev');
        const tbtn = document.getElementById('toc-toggle-btn');
        if (tb && tb.classList.contains('open')) {
            tb.classList.remove('open');
            if (tc) tc.style.transform = 'rotate(0deg)';
            if (tbtn) tbtn.setAttribute('aria-expanded', 'false');
        }
    }

    // تحديث TOC النشط
    updateActiveTOC();

    // سنة الـ footer ديناميكية
    const fy = document.getElementById('footer-year');
    if (fy) fy.textContent = new Date().getFullYear();
});