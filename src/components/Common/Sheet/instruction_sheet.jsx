
// mui
import { Paper , Typography} from '@mui/material';
import "./instruction_sheet.css"

const InstructionSheet = () => {

  return (
    <Paper className='instrucrion-paper' elevation={3} >
        <p>
            تعليمات الشراء لمستخدمي منصة جمع العروض (SaaS)
        </p>
    
        <p>
            مرحبًا بك في منصتنا لجمع العروض! لتسهيل عملية الشراء وتقديم الطلبات، يرجى اتباع التعليمات التالية:
        </p>
    
        <p>
            التسجيل وإنشاء الحساب
        </p>

        <ul>
            <h3>1. التسجيل:</h3>
            <li>
                <ul>
                    <li><span>■</span>اذهب إلى صفحة التسجيل.</li>
                    <li><span>■</span>أدخل بياناتك الشخصية (الاسم، البريد الإلكتروني، كلمة المرور، إلخ).</li>
                    <li><span>■</span>اضغط على "تسجيل" لإنشاء حسابك.</li>
                </ul>
            </li>
                
            <h3>2. تسجيل الدخول:</h3>
            <li>
                <ul>
                    <li><span>■</span>اذهب إلى صفحة تسجيل الدخول.</li>
                    <li><span>■</span>أدخل بريدك الإلكتروني وكلمة المرور.</li>
                    <li><span>■</span>اضغط على "تسجيل الدخول".</li>
                </ul>
            </li>
        </ul>

        <br />
        <h3>لوحة التحكم</h3>
        <ul>                
            <h3>1. لوحة القيادة:</h3>
            <li>
                <ul>
                    <li><span>■</span>بعد تسجيل الدخول، ستصل إلى لوحة القيادة التي تعرض المقاييس الأساسية للعمليات النشطة</li>
                    <li><span>■</span>يمكنك مشاهدة إشعارات العمليات الحالية والردود الواردة.</li>
                </ul>
            </li>
        </ul>

        <ul>                
            <p>إنشاء طلب عرض سعر (RFQ)</p>
            <h3>1.إنشاء RFQ جديد:</h3>
            <li>
                <ul>
                    <li><span>■</span>من لوحة التحكم، اضغط على "إنشاء RFQ جديد".</li>
                    <li><span>■</span>املأ النموذج بمعلومات الطلب:</li>
                    <ul>
                        <li><span>■</span>المنتج: وصف دقيق للمنتج المطلوب.</li>
                        <li><span>■</span>الكمية: الكمية المطلوبة.</li>
                        <li><span>■</span>وصف العمل: تفاصيل إضافية حول المتطلبات.</li>
                    </ul>
                </ul>
            </li>
            <h3>2. إرسال RFQ:</h3>
            <li>
                <ul>
                    <li><span>■</span>بعد ملء النموذج، اضغط على "إرسال".</li>
                    <li><span>■</span>سيتم إرسال طلبك إلى البائعين المحددين.</li>
                </ul>
            </li>
        </ul>

        <ul>
            <p>استقبال الردود</p>
            <h3>1. استلام الردود:</h3>
            <ul>
                <li><span>■</span>ستتلقى إشعارات عند استلام العروض من البائعين.</li>
                <li><span>■</span>اذهب إلى لوحة "الردود" لمشاهدة العروض المستلمة.</li>
            </ul>

            <h3>2. مراجعة العروض:</h3>
            <ul>
                <li><span>■</span>استعرض العروض المقدمة من البائعين.</li>
                <li><span>■</span>كل عرض يتضمن التفاصيل والملفات المرفقة المقدمة من البائعين.</li>
            </ul>
        </ul>
        
        <h3>اختيار البائع</h3>
        <ul>
            <li>
                <p>1. مقارنة العروض:</p>
                <ul>
                    <li><span>■</span>    استخدم أداة المقارنة لمقارنة العروض المقدمة بناءً على التفاصيل والملفات المرفقة.</li>
                </ul>
            </li>

            <li>
                <p>2. اتخاذ القرار:</p>
                <ul>
                    <li><span>■</span>    اختر العرض الأنسب لك بناءً على المعايير الخاصة بك.</li>
                    <li><span>■</span>    اضغط على "قبول" أو "رفض" لكل عرض.</li>
                </ul>
            </li>
        </ul>
        <p>إدارة الحساب</p>
        <ul>
            <li>
                <p>1. تحديث المعلومات الشخصية:</p>
                <ul>
                    <li><span>■</span></li>
                </ul>
            </li>
        </ul>
    </Paper>
  );
  
};

export default InstructionSheet;