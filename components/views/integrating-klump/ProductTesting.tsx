import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import Callout from '../../Callout';
import content from '../../../data/content/views/integrating-klump/product-testing.json';

interface ProductTestingViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function ProductTesting({ children, readingTime, date, title }: ProductTestingViewProps) {
    const { productTesting } = content;

    const renderSVGIcon = (index: number) => {
        switch(index) {
            case 0: // Phone Number & OTP PIN
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.78073 11.2667V28.8363L4.95286 26.6273V13.4511L1.125 11.2421V6.84863L8.78073 11.2667Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.9774 7.16805L12.8996 9.20903L8.78073 11.2664L1.125 6.84838L9.32171 2.75L16.9774 7.16805Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.8837 14.2131V18.6065L16.6009 20.1762L13.8837 21.5327V26.2868L8.78125 28.836V11.2663L12.9001 9.20895L16.978 7.16797V12.668L13.8837 14.2131Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.7107 26.6719V29.5981L25.3664 34.0203V38.4137L13.8828 31.7826V21.5326L16.9771 23.3194L21.5385 25.9547V23.0244L16.9771 20.3932L16.6 20.176L13.8828 18.6063V14.2129L16.9771 15.9998L20.6779 18.135L22.0795 18.9465L25.3664 20.844V31.0899L20.4279 28.2416L17.7107 26.6719Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.5631 16.7454L29.4894 18.7823L26.7681 20.1429L25.3664 20.8438L22.0795 18.9462L20.6779 18.1347L16.9771 15.9995L13.8828 14.2126L16.9771 12.6675L22.0795 10.1143L33.5631 16.7454Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M48.8755 25.5862L44.8017 27.6231L42.0804 28.9838L40.6789 29.6846L39.9453 29.2625L38.5437 28.451L33.5642 25.578L29.1953 23.0534L33.5642 20.869L37.392 18.9551L48.8755 25.5862Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M40.6789 29.6849V47.2504L29.1953 40.6234V36.2299L29.4453 36.3734L36.851 40.648V37.7217L32.1666 35.0168L31.9125 34.8693L31.7486 34.775V31.8488L33.5642 32.898L34.6297 33.5127L36.851 34.7955V31.8652L34.4658 30.4881L33.5642 29.9676L33.5232 29.9431L30.8019 28.3734L29.1953 27.4472V23.0537L33.5642 25.5783L38.5437 28.4513L39.9453 29.2627L40.6789 29.6849Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.7483 31.8481V34.7744L31.9123 34.8686L29.1951 36.2293V36.4998L25.3672 38.4137V34.0203L29.486 31.9588L33.5229 29.9424L33.5639 29.967V30.9424L31.7483 31.8481Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.5385 23.0241V25.9545L16.9771 23.3192L13.8828 21.5323L16.6 20.1758L16.9771 20.393R21.5385 23.0241Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.4281 28.2415L17.7109 29.5981V26.6719L20.4281 28.2415Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.5224 29.943L29.4855 31.9594L25.3667 34.0209L17.7109 29.5987L20.4281 28.2422L25.3667 31.0905L26.7642 30.3897L30.8011 28.3733L33.5224 29.943Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.1951 23.0535V27.4469L30.8016 28.3731L26.7647 30.3895L25.3672 31.0904V20.8445L26.7688 20.1436L29.4901 18.783L33.5639 16.7461V20.869L29.1951 23.0535Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M48.8755 25.5859V43.1516L40.6787 47.2499V29.6843L42.0804 28.9835L44.8017 27.6228L48.8755 25.5859Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M36.851 37.7216V40.6478L29.4453 36.3732L29.1953 36.2298L31.9125 34.8691L32.1666 35.0167L36.851 37.7216Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M36.8505 31.8644V34.7947L34.6292 33.5119L33.5636 32.8971L31.748 31.848L33.5636 30.9422L34.4653 30.4873L36.8505 31.8644Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 1: // Bio Data
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.7578 24.7266L31.8008 23.0195L21.0312 16.8008L18.0742 11.7031L14.0625 9.38672L6.25 4.875V32.0117L35.8125 49.082V25.3359L34.7578 24.7266ZM29.8984 35.4922L27.1367 33.8945L26.9453 33.7852V37.1758L23.9883 35.4688V32.0781L21.0312 30.3711V26.9805L23.9883 28.6836V25.293L26.9453 27V30.3906L27.1406 30.5039L29.8984 32.0977V35.4922Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9453 27V27.207L23.9883 28.6836V25.293L26.9453 27Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.1406 30.5039L23.9883 32.0781L21.0312 30.3711V26.9805L23.9883 28.6836L26.9453 27.207V30.3906L27.1406 30.5039Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.8984 32.0977V32.3086L26.9453 33.7852V33.9922L25.5039 34.7109L23.9883 35.4688V32.0781L27.1406 30.5039L29.8984 32.0977Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.8984 32.3086V35.4922L27.1367 33.8945L26.9453 33.7852L29.8984 32.3086Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.625 21.4297V45.1758L35.8125 49.082V25.3359L43.625 21.4297Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.625 21.4297L35.8125 25.3359L34.7578 24.7266L31.8008 23.0195L21.0312 16.8008L28.8438 12.8945L43.625 21.4297Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.8438 12.8945L21.0312 16.8008L18.0742 11.7031L25.8867 7.79688L28.8438 12.8945Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.8867 7.79688L18.0742 11.7031L14.0625 9.38673L6.25 4.87501L14.0625 0.96875L25.8867 7.79688Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9453 33.9922V37.1758L23.9883 35.4688L25.5039 34.7109L26.9453 33.9922Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.78125" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 2: // ID Verification
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.045 19.8688L27.3893 17.1844L21.9466 14.0409L14.3442 9.65158L6.14746 4.91797V32.0041L35.6475 49.0368V21.9508L32.045 19.8688ZM14.3442 17.4712C14.3442 17.4712 14.3729 17.4508 14.3893 17.4426C14.9672 17.1147 15.6597 17.1844 16.4712 17.6516C17.2827 18.1188 17.9794 18.8524 18.5573 19.8483C18.836 20.3278 19.0491 20.8032 19.1885 21.2704C19.3442 21.7663 19.4221 22.2581 19.4221 22.7417C19.4221 23.2253 19.3483 23.6147 19.1926 23.9344C19.0532 24.2376 18.8401 24.4712 18.5573 24.6311C18.0819 24.9016 17.5245 24.9016 16.8893 24.6311H16.8852C16.7499 24.5737 16.6146 24.5041 16.4712 24.4221C15.6597 23.9549 14.9672 23.2212 14.3893 22.2253C14.3729 22.1967 14.3565 22.1721 14.3442 22.1434C13.795 21.1762 13.5204 20.2376 13.5204 19.3319C13.5204 18.4262 13.795 17.8073 14.3442 17.4712ZM22.3729 34.5983L10.5737 27.7868V26.8565C10.5737 25.586 11.1106 24.8893 12.1925 24.7664C12.7991 24.6967 13.5163 24.8073 14.3442 25.1024C14.6229 25.2008 14.9139 25.3237 15.2213 25.4631C15.6147 25.6434 16.0327 25.8647 16.4712 26.1147C18.2417 27.1352 19.668 28.336 20.75 29.7049C21.4877 30.6434 21.9753 31.5573 22.2089 32.4467C22.3195 32.8565 22.3729 33.2663 22.3729 33.668V34.5983ZM31.2253 34.6311L23.8482 30.3729V26.9876L26.9918 28.8032L31.2253 31.2458V34.6311ZM31.2253 29.5532L30.5491 29.1639L28.5614 28.0163L23.8482 25.295V21.9098L26.9918 23.7253L27.3483 23.9303L31.2253 26.168V29.5532Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9922 23.7257L23.8486 25.2954V21.9102L26.9922 23.7257Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.4222 22.7422C19.4222 23.2176 19.3484 23.6152 19.1927 23.9348C19.0533 24.2381 18.8402 24.4717 18.5574 24.6315C18.082 24.902 17.5246 24.902 16.8894 24.6315H16.8853C16.75 24.5741 16.6147 24.5046 16.4713 24.4226C15.6598 23.9554 14.9673 23.2217 14.3894 22.2258C14.373 22.1971 14.3566 22.1725 14.3443 22.1439C13.7951 21.1766 13.5205 20.2381 13.5205 19.3324C13.5205 18.4266 13.7951 17.8078 14.3443 17.4717C14.3566 17.4594 14.373 17.4512 14.3894 17.443C14.9673 17.1152 15.6598 17.1848 16.4713 17.6521C17.2828 18.1193 17.9795 18.8529 18.5574 19.8488C18.8361 20.3283 19.0492 20.8037 19.1886 21.2709C19.3443 21.7668 19.4222 22.2586 19.4222 22.7422Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.2257 31.2463V34.6316L23.8486 30.3734L26.9922 28.8037L31.2257 31.2463Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9922 28.8029L23.8486 30.3726V26.9873L26.9922 28.8029Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.2257 26.1682V29.5535L30.5495 29.1641L28.5617 28.0166L23.8486 25.2953L26.9922 23.7256L27.3487 23.9305L31.2257 26.1682Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.2218 25.4629L14.3447 25.9015L10.5742 27.7867V26.8564C10.5742 25.5859 11.1111 24.8892 12.1931 24.7663C12.7996 24.6966 13.5168 24.8072 14.3447 25.1023C14.6234 25.2006 14.9144 25.3236 15.2218 25.4629Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.3734 33.6678V34.5981L10.5742 27.7867L14.3447 25.9015L15.2218 25.4629C15.6152 25.6432 16.0332 25.8645 16.4717 26.1145C18.2422 27.135 19.6685 28.3358 20.7505 29.7047C21.4882 30.6432 21.9758 31.5572 22.2094 32.4465C22.3201 32.8563 22.3734 33.2662 22.3734 33.6678Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.8442 17.8525V44.9386L35.6475 49.0369V21.9509L37.5614 20.9959L43.8442 17.8525Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.8442 17.8522L37.5614 20.9956L35.6475 21.9505L32.045 19.8685L27.3893 17.1841L21.9466 14.0406L14.3442 9.6513L6.14746 4.9177L14.3442 0.819336L43.8442 17.8522Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.819672" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 3: // Test Bank Account
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7737 16.9732V28.9362L9.79688 27.2185V15.251L12.7737 16.9732Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.7129 22.1297V34.0973L18.7314 32.3751V20.4121L19.0555 20.5973L21.7129 22.1297Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.1159 45.2547V48.676L5.32422 31.4723V28.0557L35.1159 45.2547Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3752 40.6259L35.1159 45.2555L5.32422 28.0564L9.79653 25.8203V27.2185L12.7733 28.9361L15.6854 27.4777L18.7317 25.9592V32.3759L21.7132 34.0981L24.6252 32.6444L27.6714 31.1212V37.5379L30.6484 39.2601L33.5603 37.8018L36.7363 36.2138L44.3752 40.6259Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3745 40.625V44.0463L35.1152 48.6759V45.2546L44.3745 40.625Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3745 18.4033V21.8246L39.9069 24.0607L36.93 25.5468L35.1152 26.4542V23.0329L36.93 22.1255L38.0273 21.5746L41.1985 19.9913L44.3745 18.4033Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3744 18.4033L41.1984 19.9913L38.0272 21.5746L36.9299 22.1255L35.1152 23.0329L34.3976 22.2088L30.9717 18.2644L30.5087 17.732L29.6429 16.7366L23.6939 9.88477L20.2217 5.8894L29.4809 1.25977L44.3744 18.4033Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.4817 1.25966L20.2225 5.8893L16.7502 5.87541L5.32422 5.83375L14.5835 1.2041L29.4817 1.25966Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.1159 23.0331V26.4544L33.8196 25.7044L30.9724 24.0608L30.8382 23.9868L27.991 22.3432L24.8798 20.5469L22.0326 18.9034L21.903 18.8247L19.0558 17.1812L15.9447 15.3849L12.9631 13.6673L5.32422 9.25528V5.83398L16.7502 5.87565L20.2225 5.88954L23.6947 9.88491L29.6437 16.7368L30.5095 17.7321L30.9724 18.2645L34.3983 22.209L35.1159 23.0331Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M39.9077 24.0605V34.63L36.7364 36.2133L33.5604 37.8013L30.6484 39.2596V27.292L30.9725 27.13L33.8196 25.7041L35.116 26.4541L36.9308 25.5467L39.9077 24.0605Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.8191 25.7039L30.9719 27.1298L30.6478 27.2919L27.9904 25.7548L27.6709 25.5697L27.9904 25.4123L30.8376 23.9863L30.9719 24.0604L33.8191 25.7039Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.8795 20.5464L22.0323 21.9724L21.7129 22.1298L19.0555 20.5974L18.7314 20.4122L19.0555 20.2501L21.9026 18.8242L22.0323 18.9029L24.8795 20.5464Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.9907 22.3432V25.4126L27.6712 25.57V31.1209L24.6249 32.6441L21.7129 34.0978V22.1302L22.0323 21.9728L24.8795 20.5469L27.9907 22.3432Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.6478 27.2925V39.2601L27.6709 37.5379V25.5703L27.9904 25.7555L30.6478 27.2925Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.945 15.3846L12.7737 16.9725L9.79688 15.2503L12.9634 13.667L15.945 15.3846Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.0559 17.1811V20.2505L18.7319 20.4125V25.9588L15.6855 27.4774L12.7734 28.9357V16.9727L15.9448 15.3848L19.0559 17.1811Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.7737 16.9732V28.9362L9.79688 27.2185V15.251L12.7737 16.9732Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.7129 22.1297V34.0973L18.7314 32.3751V20.4121L19.0555 20.5973L21.7129 22.1297Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.1159 45.2547V48.676L5.32422 31.4723V28.0557L35.1159 45.2547Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3752 40.6259L35.1159 45.2555L5.32422 28.0564L9.79653 25.8203V27.2185L12.7733 28.9361L15.6854 27.4777L18.7317 25.9592V32.3759L21.7132 34.0981L24.6252 32.6444L27.6714 31.1212V37.5379L30.6484 39.2601L33.5603 37.8018L36.7363 36.2138L44.3752 40.6259Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3745 40.625V44.0463L35.1152 48.6759V45.2546L44.3745 40.625Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3745 18.4033V21.8246L39.9069 24.0607L36.93 25.5468L35.1152 26.4542V23.0329L36.93 22.1255L38.0273 21.5746L41.1985 19.9913L44.3745 18.4033Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.3744 18.4033L41.1984 19.9913L38.0272 21.5746L36.9299 22.1255L35.1152 23.0329L34.3976 22.2088L30.9717 18.2644L30.5087 17.732L29.6429 16.7366L23.6939 9.88477L20.2217 5.8894L29.4809 1.25977L44.3744 18.4033Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.4817 1.25966L20.2225 5.8893L16.7502 5.87541L5.32422 5.83375L14.5835 1.2041L29.4817 1.25966Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M35.1159 23.0331V26.4544L33.8196 25.7044L30.9724 24.0608L30.8382 23.9868L27.991 22.3432L24.8798 20.5469L22.0326 18.9034L21.903 18.8247L19.0558 17.1812L15.9447 15.3849L12.9631 13.6673L5.32422 9.25528V5.83398L16.7502 5.87565L20.2225 5.88954L23.6947 9.88491L29.6437 16.7368L30.5095 17.7321L30.9724 18.2645L34.3983 22.209L35.1159 23.0331Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M39.9077 24.0605V34.63L36.7364 36.2133L33.5604 37.8013L30.6484 39.2596V27.292L30.9725 27.13L33.8196 25.7041L35.116 26.4541L36.9308 25.5467L39.9077 24.0605Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.8191 25.7039L30.9719 27.1298L30.6478 27.2919L27.9904 25.7548L27.6709 25.5697L27.9904 25.4123L30.8376 23.9863L30.9719 24.0604L33.8191 25.7039Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.8795 20.5464L22.0323 21.9724L21.7129 22.1298L19.0555 20.5974L18.7314 20.4122L19.0555 20.2501L21.9026 18.8242L22.0323 18.9029L24.8795 20.5464Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.9907 22.3432V25.4126L27.6712 25.57V31.1209L24.6249 32.6441L21.7129 34.0978V22.1302L22.0323 21.9728L24.8795 20.5469L27.9907 22.3432Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.6478 27.2925V39.2601L27.6709 37.5379V25.5703L27.9904 25.7555L30.6478 27.2925Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.945 15.3846L12.7737 16.9725L9.79688 15.2503L12.9634 13.667L15.945 15.3846Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.0559 17.1811V20.2505L18.7319 20.4125V25.9588L15.6855 27.4774L12.7734 28.9357V16.9727L15.9448 15.3848L19.0559 17.1811Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.925926" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 4: // Test Credentials
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2071 11.5416L14.2567 9.835L5.99219 5.06641V32.1408L35.4881 49.1698V22.0912L17.2071 11.5416ZM32.5376 33.9259L14.2567 23.3722L8.9426 20.3061V13.5375L14.2567 16.6036L15.2277 17.1656L32.5376 27.1573V33.9259Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.826446" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.2275 17.1652L14.2564 17.6487L8.94238 20.3057V13.5371L14.2564 16.6032L15.2275 17.1652Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.826446" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M32.5374 27.1568V33.9253L14.2564 23.3717L8.94238 20.3055L14.2564 17.6485L15.2275 17.165L32.5374 27.1568Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.826446" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.7518 17.959V45.0375L35.4873 49.1697V22.0912L37.4666 21.0995L43.7518 17.959Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.826446" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.7525 17.9584L37.4674 21.0989L35.4881 22.0906L17.2071 11.541L14.2567 9.83443L5.99219 5.06584L14.2567 0.933594L43.7525 17.9584Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.826446" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 5: // Emails
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3768 29.8749L6.99121 26.1885V33.1715L34.3853 48.9852V42.002L13.3768 29.8749ZM11.5632 34.0613L8.52087 32.3028V28.8113L11.5632 30.5698V34.0613Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 30.7812V34.0609L8.5166 32.3024L11.5632 30.7812Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 30.57V30.7819L8.5166 32.303V28.8115L11.5632 30.57Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3768 8.92183L6.99121 5.23535V12.2184L10.2327 14.0913L15.4658 17.1125L16.6183 17.7778L34.3853 28.032V21.049L13.3768 8.92183ZM11.5632 13.1083L8.52087 11.3498V7.85828L11.5632 9.61675V13.1083Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 9.82812V13.1078L8.5166 11.3493L11.5632 9.82812Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 9.61594V9.8278L8.5166 11.3489V7.85742L11.5632 9.61594Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8642 37.7646V44.7475L34.3896 48.9848V42.0019L36.3769 41.0062L42.8642 37.7646Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3811 19.3964L6.99121 15.71V22.6972L10.2327 24.5701L15.4658 27.5913L16.6141 28.2523L34.3853 38.5108V31.5235L13.3811 19.3964ZM11.5632 23.5871L8.52087 21.8286V18.3371L11.5632 20.0913V23.5871Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 20.3066V23.5863L8.5166 21.8278L11.5632 20.3066Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5632 20.0912V20.3073L8.5166 21.8284V18.3369L11.5632 20.0912Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8642 27.2861V34.2734L39.6184 35.8921L34.3896 38.5107V31.5234L36.3727 30.5277L42.8642 27.2861Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8641 27.2857L36.3726 30.5273L34.3895 31.523L13.3811 19.3959L6.99121 15.7095L10.237 14.0908L15.4658 17.112L16.6226 17.7773L34.3895 28.0315L39.6183 25.4129L42.8641 27.2857Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8642 16.8115V23.7945L39.6184 25.4132L34.3896 28.0318V21.0488L36.3769 20.053L42.8642 16.8115Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8641 16.8117L36.3768 20.0532L34.3895 21.0489L13.3768 8.92182L6.99121 5.23534L15.4658 0.998047L42.8641 16.8117Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M42.8641 37.7642L36.3768 41.0058L34.3895 42.0015L13.3768 29.8744L6.99121 26.188L10.237 24.5693L15.4658 27.5905L16.6183 28.2515L34.3895 38.51L39.6183 35.8914L42.8641 37.7642Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.847458" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case 6: // Password
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.7951 37.9129L33.9497 37.8356C34.1952 37.7038 34.4224 37.5356 34.6315 37.3265C35.3088 36.6492 35.6497 35.6265 35.6497 34.2538C35.6497 32.4901 35.1042 30.6674 34.0133 28.7901C33.1269 27.2538 32.0861 26.0492 30.8997 25.1765C30.6315 24.9811 30.3543 24.7992 30.0724 24.6356C28.6088 23.7947 27.3542 23.6311 26.2997 24.1447L26.2634 24.1629C26.2179 24.1856 26.1724 24.2083 26.127 24.2356C25.0406 24.8538 24.4951 26.0492 24.4951 27.8174C24.4951 28.5583 24.5907 29.3129 24.7816 30.072C24.9679 30.8129 25.2451 31.5629 25.6088 32.322C26.1224 33.3811 26.7315 34.3311 27.4497 35.1674C27.7678 35.5492 28.1133 35.9038 28.4769 36.2401V44.7401L30.8679 48.8627L34.0543 47.0491L31.6633 42.9265L34.0543 41.5629L32.0634 38.1265C32.7088 38.2129 33.286 38.1447 33.7951 37.9129ZM31.2088 32.0811C30.8997 32.2538 30.5224 32.2129 30.0724 31.9492C29.6179 31.6901 29.2406 31.2947 28.9361 30.7674C28.6315 30.2447 28.4769 29.722 28.4769 29.2038C28.4769 28.6856 28.6315 28.3401 28.9361 28.1629C29.2406 27.9901 29.6179 28.0311 30.0724 28.2947C30.5224 28.5538 30.8997 28.9492 31.2088 29.4765C31.5133 30.0038 31.6633 30.522 31.6633 31.0401C31.6633 31.5583 31.5133 31.9038 31.2088 32.0811Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.2094 29.4764C30.9003 28.9491 30.523 28.5537 30.073 28.2946C29.6184 28.031 29.2412 27.99 28.9366 28.1627C28.6321 28.34 28.4775 28.6855 28.4775 29.2037C28.4775 29.7219 28.6321 30.2446 28.9366 30.7673C29.2412 31.2946 29.6184 31.69 30.073 31.9491C30.523 32.2127 30.9003 32.2536 31.2094 32.0809C31.5139 31.9036 31.6639 31.5582 31.6639 31.04C31.6639 30.5218 31.5139 30.0036 31.2094 29.4764Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.1454 42.5039L39.9591 44.3176L30.8682 48.8629L34.0545 47.0492L39.8591 44.1448L43.1454 42.5039Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.1459 42.5036L39.8595 44.1445L34.055 47.049L31.6641 42.9263L37.5686 39.9763L40.755 38.3809L43.1459 42.5036Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.1459 37.0176L40.755 38.3812L37.5686 39.9767L31.6641 42.9267L34.055 41.563L37.5686 39.8085L43.1459 37.0176Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M43.1452 37.0171L37.568 39.808L34.0543 41.5626L32.0635 38.1262C32.7089 38.2126 33.2862 38.1444 33.7952 37.9126L33.9498 37.8353L34.0543 37.7808L37.568 36.0307L41.4498 34.0898L43.1452 37.0171Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.4956 27.8173C24.4956 28.5582 24.5911 29.3128 24.782 30.0719C24.9684 30.8128 25.2456 31.5628 25.6092 32.3219C26.1229 33.3809 26.732 34.3309 27.4502 35.1673L25.0547 36.3673C23.7774 34.6264 22.8093 32.7764 22.1457 30.8264C21.832 29.9082 21.6093 29.0218 21.4684 28.1582C21.3048 27.1809 21.2547 26.24 21.3093 25.3355L30.4002 20.79C30.3729 21.2173 30.3729 21.6537 30.3911 22.0991L26.3002 24.1446L26.2639 24.1628C26.2184 24.1855 26.1729 24.2082 26.1275 24.2354C25.0411 24.8536 24.4956 26.0491 24.4956 27.8173Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.0542 36.3673V40.0219L5.37695 28.6628V23.5446C5.37695 22.5082 5.60878 21.6901 6.07242 21.0901C6.2906 20.8082 6.54522 20.5901 6.83159 20.4355L6.91338 20.3946C7.21792 20.2491 7.55428 20.1764 7.927 20.1719C9.57246 20.1764 11.2452 20.431 12.9452 20.9401C13.4497 21.0901 13.9588 21.2673 14.4679 21.4628C15.6724 21.9264 16.8906 22.5128 18.1224 23.2219C18.6542 23.531 19.1861 23.8582 19.7133 24.2128C20.2451 24.5628 20.777 24.9401 21.3088 25.3355C21.2542 26.2401 21.3088 27.181 21.4679 28.1582C21.6088 29.0219 21.8316 29.9082 22.1452 30.8264C22.8088 32.7764 23.777 34.6264 25.0542 36.3673Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.4004 20.7902L21.3095 25.3357C20.7777 24.9402 20.2459 24.5629 19.714 24.2129C19.1868 23.8584 18.6549 23.5311 18.1231 23.222C16.8913 22.5129 15.6731 21.9266 14.4685 21.4629C13.9594 21.2675 13.4504 21.0902 12.9459 20.9402C11.2459 20.4311 9.57313 20.1766 7.92769 20.1721C7.55496 20.1766 7.21861 20.2493 6.91406 20.3948L13.8186 16.9766C14.0504 17.3629 14.2959 17.7266 14.5459 18.072C15.5914 19.5129 16.7822 20.622 18.1231 21.3947C19.8777 22.4084 21.3777 22.5584 22.6232 21.8448L28.0095 19.1538C28.2777 19.322 28.5413 19.4902 28.8049 19.6675C29.3368 20.0175 29.8686 20.3948 30.4004 20.7902Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.4955 17.7631C24.4955 19.7721 23.8728 21.1358 22.6228 21.8449C21.3774 22.5585 19.8773 22.4085 18.1227 21.3949C16.7818 20.6221 15.591 19.5131 14.5455 18.0721C14.2955 17.7267 14.05 17.363 13.8182 16.9767C13.75 16.8721 13.6864 16.7585 13.6228 16.6495C12.3728 14.4949 11.75 12.413 11.75 10.404C11.75 8.39487 12.3728 7.03123 13.6228 6.31759L13.9182 6.17214C15.1 5.63578 16.5045 5.83578 18.1227 6.76759C19.4864 7.5585 20.7 8.69037 21.7545 10.1676C22.0591 10.5904 22.3455 11.0403 22.6228 11.5176C23.0001 12.1721 23.3227 12.8176 23.5818 13.454C24.1273 14.763 24.4273 16.0449 24.4818 17.2995C24.4909 17.454 24.4955 17.6085 24.4955 17.7631Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.5861 13.2174C33.5861 15.2265 32.9635 16.5902 31.7135 17.2993L31.3681 17.472L31.318 17.4947L28.0089 19.1538L22.6226 21.8447C23.8726 21.1356 24.4952 19.772 24.4952 17.7629C24.4952 17.6083 24.4907 17.4538 24.4816 17.2993C24.4271 16.0447 24.1271 14.7629 23.5816 13.4538C23.3225 12.8174 22.9999 12.172 22.6226 11.5174C22.3453 11.0401 22.0589 10.5902 21.7543 10.1675C20.6998 8.69018 19.4862 7.55832 18.1225 6.76741C16.5043 5.83559 15.0998 5.63559 13.918 6.17195L22.7135 1.77197C23.9589 1.06288 25.4589 1.21288 27.2134 2.22197C28.968 3.2356 30.4681 4.81741 31.7135 6.97195C32.9635 9.12195 33.5861 11.2038 33.5861 13.2174Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.4774 36.2397V38.3124L25.0547 40.0215V36.367L27.4501 35.167C27.7683 35.5488 28.1138 35.9034 28.4774 36.2397Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M44.7407 29.708C44.7407 31.0808 44.3998 32.1035 43.7225 32.7808C43.5044 32.9944 43.2725 33.1671 43.018 33.3035L41.4498 34.0899L34.0544 37.7808L33.9498 37.8353C34.1953 37.7035 34.4225 37.5353 34.6316 37.3262C35.3089 36.649 35.6498 35.6262 35.6498 34.2535C35.6498 32.4899 35.1043 30.6671 34.0134 28.7898C33.127 27.2535 32.0862 26.0489 30.8998 25.1762C30.6317 24.9807 30.3544 24.7989 30.0725 24.6353C28.6089 23.7944 27.3544 23.6308 26.2998 24.1444L35.4453 19.5717C36.4908 19.0899 37.7271 19.2625 39.1634 20.0898C40.7044 20.9807 42.0179 22.3625 43.1043 24.2444C44.1952 26.1216 44.7407 27.9444 44.7407 29.708Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M41.4501 34.0898L37.5683 36.0307L34.0547 37.7808L41.4501 34.0898Z" fill="#C8E7FF" stroke="#006BFC" stroke-width="0.909091" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={productTesting.sections}
            titleId="getting-started"
        >
            <ContentSection>
                {productTesting.intro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </ContentSection>

            <ContentSection className="border-t border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12">
                {productTesting.contentSections.map((section, index) => (
                    <div key={index} className='mb-8 lg:mb-12'>
                        <span>
                            {renderSVGIcon(index)}
                        </span>
                        <h2 className="text-lg text-[#1F1F2D] font-semibold mt-3">{section.title}</h2>
                        <p className="mb-4">{section.description}</p>
                        {section.warning && (
                            <Callout title={section.warning.title} type="warning">
                                <div className="text-[#1F1F2D] space-y-3">
                                    <p>{section.warning.description}</p>
                                </div>
                            </Callout>
                        )}
                    </div>
                ))}
            </ContentSection>
        </DocumentationPageLayout>
    );
}
