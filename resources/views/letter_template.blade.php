<!-- resources/views/letter_template.blade.php -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8">
    <title>Letter</title>
</head>

<body>
    <p>الموافق : {{ now()->format('d/m/Y') }} م</p>
    <p>السادة / مـــصـــــرف الــراجـحـــــي المحترمين</p>
    <p>تحية طيبة ـ وبعد ،</p>
    <p>يرجـى التـكرم بتحويل مايعادل مبلغ {{ $amount }} {{ $currency }} (فقط {{ $amount }}
        {{ $currency }} لاغير) على العنوان التالي :-</p>
    <p>{{ $name }}</p>
    <p>{{ $bank }}</p>
    <p>{{ $account }}</p>
    <p>{{ $swift }}</p>
    <p>خصماً من حسابنا الجاري طرفكم رقم : 2796 بالريال</p>
    <p>شاكرين حسن تعاونكم</p>
    <p>وتقبلوا خالص تحياتنا</p>
    <p>الشركة xxxxxxx</p>
</body>

</html>
