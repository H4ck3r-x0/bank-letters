<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = [
            ['code' => 'USD', 'name' => 'دولار أمريكي'],
            ['code' => 'EUR', 'name' => 'يورو'],
            ['code' => 'JPY', 'name' => 'ين ياباني'],
            ['code' => 'GBP', 'name' => 'جنيه إسترليني'],
            ['code' => 'AUD', 'name' => 'دولار أسترالي'],
            ['code' => 'CAD', 'name' => 'دولار كندي'],
            ['code' => 'CHF', 'name' => 'فرنك سويسري'],
            ['code' => 'CNY', 'name' => 'يوان صيني'],
            ['code' => 'SEK', 'name' => 'كرونا سويدية'],
            ['code' => 'NZD', 'name' => 'دولار نيوزيلندي'],
            ['code' => 'MXN', 'name' => 'بيزو مكسيكي'],
            ['code' => 'SGD', 'name' => 'دولار سنغافوري'],
            ['code' => 'HKD', 'name' => 'دولار هونغ كونغي'],
            ['code' => 'NOK', 'name' => 'كرونة نرويجية'],
            ['code' => 'KRW', 'name' => 'وون كوري جنوبي'],
            ['code' => 'TRY', 'name' => 'ليرة تركية'],
            ['code' => 'RUB', 'name' => 'روبل روسي'],
            ['code' => 'INR', 'name' => 'روبية هندية'],
            ['code' => 'BRL', 'name' => 'ريال برازيلي'],
            ['code' => 'ZAR', 'name' => 'راند جنوب أفريقي'],
            ['code' => 'AED', 'name' => 'درهم إماراتي'],
            ['code' => 'SAR', 'name' => 'ريال سعودي'],
            ['code' => 'QAR', 'name' => 'ريال قطري'],
            ['code' => 'KWD', 'name' => 'دينار كويتي'],
            ['code' => 'OMR', 'name' => 'ريال عماني'],
            ['code' => 'BHD', 'name' => 'دينار بحريني'],
            ['code' => 'EGP', 'name' => 'جنيه مصري'],
            ['code' => 'LBP', 'name' => 'ليرة لبنانية'],
            ['code' => 'MAD', 'name' => 'درهم مغربي'],
            ['code' => 'DZD', 'name' => 'دينار جزائري'],
            ['code' => 'TND', 'name' => 'دينار تونسي'],
            ['code' => 'LYD', 'name' => 'دينار ليبي'],
            ['code' => 'SYP', 'name' => 'ليرة سورية'],
            ['code' => 'IQD', 'name' => 'دينار عراقي'],
            ['code' => 'YER', 'name' => 'ريال يمني'],
            ['code' => 'JOD', 'name' => 'دينار أردني'],
            ['code' => 'ILS', 'name' => 'شيكل إسرائيلي'],
            ['code' => 'AFN', 'name' => 'أفغاني'],
            ['code' => 'PKR', 'name' => 'روبية باكستانية'],
            ['code' => 'BDT', 'name' => 'تاكا بنغلاديشي'],
            ['code' => 'LKR', 'name' => 'روبية سريلانكية'],
            ['code' => 'MMK', 'name' => 'كيات ميانماري'],
            ['code' => 'THB', 'name' => 'بات تايلندي'],
            ['code' => 'VND', 'name' => 'دونغ فيتنامي'],
            ['code' => 'IDR', 'name' => 'روبية إندونيسية'],
            ['code' => 'MYR', 'name' => 'رينغيت ماليزي'],
            ['code' => 'PHP', 'name' => 'بيزو فلبيني'],
            ['code' => 'KHR', 'name' => 'ريال كمبودي'],
            ['code' => 'LAK', 'name' => 'كيب لاوسي'],
            ['code' => 'BND', 'name' => 'دولار بروني'],
            ['code' => 'TWD', 'name' => 'دولار تايواني'],
            ['code' => 'MNT', 'name' => 'توغروغ منغولي'],
            ['code' => 'KZT', 'name' => 'تنغي كازاخستاني'],
            ['code' => 'UZS', 'name' => 'سوم أوزبكستاني'],
            ['code' => 'TMT', 'name' => 'مانات تركماني'],
            ['code' => 'GEL', 'name' => 'لاري جورجي'],
            ['code' => 'AMD', 'name' => 'درام أرمني'],
            ['code' => 'AZN', 'name' => 'مانات أذربيجاني'],
            ['code' => 'BYN', 'name' => 'روبل بيلاروسي'],
            ['code' => 'UAH', 'name' => 'هريفنيا أوكرانية'],
            ['code' => 'MDL', 'name' => 'ليو مولدوفي'],
            ['code' => 'RON', 'name' => 'ليو روماني'],
            ['code' => 'BGN', 'name' => 'ليف بلغاري'],
            ['code' => 'PLN', 'name' => 'زلوتي بولندي'],
            ['code' => 'CZK', 'name' => 'كرونة تشيكية'],
            ['code' => 'HUF', 'name' => 'فورنت مجري'],
            ['code' => 'RSD', 'name' => 'دينار صربي'],
            ['code' => 'HRK', 'name' => 'كونا كرواتية'],
            ['code' => 'BAM', 'name' => 'مارك بوسني'],
            ['code' => 'MKD', 'name' => 'دينار مقدوني'],
            ['code' => 'ALL', 'name' => 'ليك ألباني'],
            ['code' => 'ISK', 'name' => 'كرونة أيسلندية'],
            ['code' => 'DKK', 'name' => 'كرونة دنماركية'],
            ['code' => 'HNL', 'name' => 'لامبيرة هندوراسية'],
            ['code' => 'NIO', 'name' => 'كوردوبا نيكاراغوية'],
            ['code' => 'CRC', 'name' => 'كولون كوستاريكي'],
            ['code' => 'GTQ', 'name' => 'كويتزال غواتيمالي'],
            ['code' => 'PAB', 'name' => 'بالبوا بنمي'],
            ['code' => 'PYG', 'name' => 'غواراني باراغواياني'],
            ['code' => 'UYU', 'name' => 'بيزو أوروغوياني'],
            ['code' => 'VEF', 'name' => 'بوليفار فنزويلي'],
            ['code' => 'COP', 'name' => 'بيزو كولومبي'],
            ['code' => 'PEN', 'name' => 'سول بيروفي'],
            ['code' => 'BOB', 'name' => 'بوليفيانو بوليفي'],
            ['code' => 'ARS', 'name' => 'بيزو أرجنتيني'],
            ['code' => 'CLP', 'name' => 'بيزو تشيلي'],
            ['code' => 'ZMW', 'name' => 'كواشا زامبية'],
            ['code' => 'BWP', 'name' => 'بولا بوتسوانية'],
            ['code' => 'NAD', 'name' => 'دولار ناميبي'],
            ['code' => 'MZN', 'name' => 'ميتيكال موزمبيقي'],
            ['code' => 'SZL', 'name' => 'ليلانغيني سوازيلندي'],
            ['code' => 'BIF', 'name' => 'فرنك بوروندي'],
            ['code' => 'CDF', 'name' => 'فرنك كونغولي'],
            ['code' => 'XAF', 'name' => 'فرنك وسط أفريقي'],
            ['code' => 'XOF', 'name' => 'فرنك غرب أفريقي'],
            ['code' => 'XPF', 'name' => 'فرنك سي إف بي'],
            ['code' => 'NGN', 'name' => 'نايرا نيجيري'],
            ['code' => 'GHS', 'name' => 'سيدي غاني'],
            ['code' => 'KES', 'name' => 'شلن كيني'],
            ['code' => 'UGX', 'name' => 'شلن أوغندي'],
            ['code' => 'TZS', 'name' => 'شلن تنزاني'],
            ['code' => 'ETB', 'name' => 'بير إثيوبي'],
            ['code' => 'SSP', 'name' => 'جنيه جنوب سوداني'],
            ['code' => 'ERN', 'name' => 'ناكفا إريتري'],
            ['code' => 'DJF', 'name' => 'فرنك جيبوتي'],
            ['code' => 'SCR', 'name' => 'روبية سيشيلية'],
            ['code' => 'MUR', 'name' => 'روبية موريشيوسية'],
            ['code' => 'MGA', 'name' => 'أرياري ملغاشي'],
            ['code' => 'KMF', 'name' => 'فرنك قمري'],
            ['code' => 'ZWL', 'name' => 'دولار زيمبابوي'],
        ];

        foreach ($currencies as $currency) {
            Currency::create($currency);
        }
    }
}