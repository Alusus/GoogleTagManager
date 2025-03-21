# GoogleTagManager
[[English]](readme.md)

مكتبة لتمكين استخدام مدير علامات جوجل (Google Tag Manager) من برامج الأسس. تم تصميم هذه المكتبة للعمل مع مـنصة_ويب.

## الاستخدام

تفترض هذه الخطوات أن لديك بالفعل مشروعًا على منصة الويب وتريد إضافة مدير علامات جوجل إليه.

* أضف المكتبة إلى مشروعك:

<div dir=rtl>

```
اشمل "مـحا"؛
مـحا.اشمل_ملف("Alusus/GoogleTagManager"، "مـدير_علامات_جوجل.أسس")؛
```

</div>

```
import "Apm";
Apm.importFile("Alusus/GoogleTagManager");
```

* أضف الاعتمادات الأخرى إذا لم يتم إضافتها بالفعل في مشروعك إما مباشرةً أو غير مباشرة. بالإضافة إلى
  منصة الويب، تعتمد هذه المكتبة على الحزم التالية:
  * `مـتم.نـم` (`Srl.Fs`)
  * `مـتم.نـظام` (`Srl.System`)
  * `مـتم.نـص` (`Srl.String`)
  * `مـتم.سـندنا` (`Srl.SrdRef`)
  * `مـؤجلات` (`Promises`)
  * `جـيسون` (`Json`)

* أضف الوحدة `مـدير_علامات_جوجل` (`GoogleTagManager`) إلى وحدات الخادم التي تبحث فيها مـنصة_ويب عن منافذ الخادم:

<div dir=rtl>

```
عرف وحدات_الخادم: { خـادمي، مـدير_علامات_جوجل }؛
ابن_وشغل_الخادم[وحدات_الخادم](خيارات)؛
```

</div>

```
def serverModules: { MyServer, GoogleTagManager };
buildAndRunServer[serverModules](options);
```

* هيئ الواجهة من المنفذ المرئي:

<div dir=rtl>

```
انتظر(مـدير_علامات_جوجل.هيئ_الواجهة("<معرف_الحساب>"))؛
```

</div>

```
await(GoogleTagManager.initializeFrontend("<account_id>"));
```

* استخدم دالات مـدير_علامات_جوجل لدفع الأحداث حسب متطلبات برنامجك. على سبيل المثال، لدفع حدث إحالة ناجحة (conversion)
  للاستخدام مع مدير إعلانات جوجل استخدم الدالة التالية من المنفذ المرئي عند حصول عملية شراء:

<div dir=rtl>

```
مـدير_علامات_جوجل.ادفع_حدث_إحالة("<معرف_الحساب>"، "<معرف_الإحالة>"، "<معرف_عملية_شراء>")؛
```

</div>

```
GoogleTagManager.pushConversionEvent("<account_id>", "<conversion_id>", "<transaction_id>");
```

