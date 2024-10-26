
// components
import Title from "../../../Common/Title/title";
// style
import "./products_table.css"

const ProductsTable = ({ data }) => {
  return (
    <div className="products-table">
        <Title>
            المنتجات / الخدمات المطلوبة 
        </Title>
        <table>
            <thead>
                <tr>
                    <th>المنتج / الخدمة</th>
                    <th>الوصف</th>
                    <th>الكمية</th>
                    <th>السعر للوحدة</th>
                    <th>إجمالي السعر</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>المنتج A</td>
                    <td>وصف المنتج A</td>
                    <td>1000 وحدة</td>
                    <td>10 $</td>
                    <td>10.000$</td>
                </tr>
                <tr>
                    <td>المنتج A</td>
                    <td>وصف المنتج A</td>
                    <td>1000 وحدة</td>
                    <td>10 $</td>
                    <td>10.000$</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default ProductsTable