import { useCallback, useEffect, useState } from 'react';
import { FieldTitles, Dividers, AmountLists, Buttons } from '../../styles/Common';
import ReviewPayForms from './Style';
import BottomSheet from '../BottomSheet';
import RadioCoupon from '../RadioCoupon';
import InputRadio from '../InputRadio';
import useInputRadio from '../../hooks/useInputRadio';
import couponData from '../../tempData/couponData';
import payMethodData from '../../tempData/payMethodData';
import partnerData from '../../tempData/partnerData';
import { priceToString } from '../../utils/func';

function ReviewPayForm() {
    // 쿠폰
    const [checkCoupon, handlerCoupon] = useInputRadio('', true);

    // 선택된 쿠폰 정보
    const [checkCouponInfo, setCheckCouponInfo] = useState(null);
    useEffect(() => {
        let couponInfo = null;

        if (checkCoupon.length > 0) {
            for (let x of couponData) {
                if (checkCoupon === x.id) {
                    couponInfo = {
                        name: x.coupon.name,
                        amount: x.coupon.amount,
                    };
                }
            }
        }

        setCheckCouponInfo(couponInfo)
    }, [checkCoupon]);

    // 결제 금액
    const [onceAmount] = useState(55000);
    const [totalAmount, setTotalAmount] = useState(onceAmount);
    useEffect(() => {
        if (checkCouponInfo) {
            setTotalAmount(onceAmount - checkCouponInfo.amount);
        }

        return () => {
            setTotalAmount(onceAmount)
        }
    }, [onceAmount, checkCouponInfo]);

    // 결제 수단
    const [checkMethod, handlerMethod] = useInputRadio('credit');

    // 노쇼 정책 바텀시트
    const [openPolicyNoShow, setOpenPolicyNoShow] = useState(false);
    const onOpenPolicyNoShow = useCallback(() => {
        setOpenPolicyNoShow(true);
    }, []);
    const onClosePolicyNoShow = useCallback(() => {
        setOpenPolicyNoShow(false);
    }, []);

    // 환불 정책 바텀시트
    const [openPolicyRefund, setOpenPolicyRefund] = useState(false);
    const onOpenPolicyRefund = useCallback(() => {
        setOpenPolicyRefund(true);
    }, []);
    const onClosePolicyRefund = useCallback(() => {
        setOpenPolicyRefund(false);
    }, []);

    // 확인 및 결제하기
    const onSubmitPay = useCallback((e) => {
        e.preventDefault();
        console.log(`선택 쿠폰 ID: ${checkCoupon}\n선택한 결제 수단 ID: ${checkMethod}\n총 결제 금액: ${totalAmount}`);
    }, [checkCoupon, checkMethod, totalAmount]);

    return (
        <ReviewPayForms onSubmit={onSubmitPay}>
            <article className='form-schedule'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>선택 일정</h6>
                    </div>
                    <div className='text'>
                        <small>제안한 시간 중 파트너가 확정하여 알림 드릴 예정입니다.</small>
                    </div>
                </FieldTitles>
                <div className='form-schedule-view'>
                    <ul>
                        {partnerData.schedule.map((v, i) => (<li key={i}>{v}</li>))}
                    </ul>
                </div>
            </article>
            <article className='form-message'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>추가 궁금한 사항</h6>
                    </div>
                </FieldTitles>
                <div className='form-message-view'>
                    <p>{partnerData.message}</p>
                </div>
            </article>
            <Dividers type2 />
            <article className='form-coupon'>
                <FieldTitles mb={0}>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        <h6>적용가능한 쿠폰이 없습니다</h6>
                    </div>
                </FieldTitles>
            </article>
            <Dividers type2 />            
            <article className='form-coupon'>
                <FieldTitles>
                    <div className='title'>
                        <h6>쿠폰</h6>
                        {checkCoupon.length === 0 && <p>적용안함</p>}
                    </div>
                </FieldTitles>
                <div className='form-coupon-input'>
                    {couponData.map((v, i) => (<RadioCoupon key={v.id} name={'coupon'} id={v.id} checkId={checkCoupon} handler={handlerCoupon} data={v.coupon}/>))}
                </div>
            </article>
            <Dividers type2 />
            <article className='form-amount'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 금액</h6>
                    </div>
                </FieldTitles>
                <div className='form-amount-view'>
                    <AmountLists>
                        <li>
                            <p>1회 (40분)</p>
                            <p>{priceToString(onceAmount)}원</p>
                        </li>
                        {checkCouponInfo &&
                            <li className='list-coupon'>
                                <p>{checkCouponInfo.name}</p>
                                <p>-{priceToString(checkCouponInfo.amount)}원</p>
                            </li>
                        }
                        <li className='list-total'>
                            <p>총 결제 금액</p>
                            <p>{priceToString(totalAmount)}원</p>
                        </li>
                    </AmountLists>
                </div>
            </article>            
            <Dividers type2 />
            <article className='form-method'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>결제 수단</h6>
                    </div>
                </FieldTitles>
                <div className='form-method-input'>
                    {payMethodData.map((v, i) => (<InputRadio key={v.id} name={'method'} id={v.id} checkId={checkMethod} handler={handlerMethod} label={v.name}/>))}
                </div>
            </article>            
            <Dividers type2 />
            <article className='form-caution'>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>유의 사항</h6>
                    </div>
                </FieldTitles>
                <ul className='form-caution-list'>
                    <li>파트너 수락 후 일정 변경은 불가합니다.</li>
                    <li>파트너 수락 후 취소 시 환급이 불가합니다.</li>
                </ul>
            </article>
            <article className='form-policy'>
                <FieldTitles mb={16}>
                    <div className='title'>
                        <h6>노쇼 정책</h6>
                        <button type='button' onClick={onOpenPolicyNoShow}>자세히 알아보기</button>
                        <BottomSheet close={!openPolicyNoShow} onClose={onClosePolicyNoShow} title={'노쇼 정책'}>
                            <p>예약 시간으로부터 5분 후 입장 시 커피챗은 자동 취소되며 환불이 불가합니다.</p>
                        </BottomSheet>
                    </div>
                </FieldTitles>
                <FieldTitles mb={8}>
                    <div className='title'>
                        <h6>환불 정책</h6>
                        <button type='button' onClick={onOpenPolicyRefund}>자세히 알아보기</button>
                        <BottomSheet close={!openPolicyRefund} onClose={onClosePolicyRefund} title={'환불정책'}>
                            <p>커피챗 예약시간에 파트너가 부득이한 사정으로 참석하지 못한 경우, 신청자님께 100% 환불됩니다.</p>
                        </BottomSheet>
                    </div>
                </FieldTitles>
            </article>
            <Dividers />
            <article className='form-agree'>
                <p>
                    아래 버튼을 선택함으로써 <br/>
                    유의 사항, 환불정책 및 노쇼정책에 동의합니다.
                </p>
            </article>
            <div className='form-submit'>
                <Buttons type='submit'>확인 및 결제하기</Buttons>
            </div>
        </ReviewPayForms>
    );
}

export default ReviewPayForm;