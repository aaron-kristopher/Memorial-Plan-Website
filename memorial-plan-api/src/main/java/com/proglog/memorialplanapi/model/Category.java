package com.proglog.memorialplanapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    private long id;
    private String category;
    private float lotPrice;
    private int vatPercent;
    private float vat;
    private float vatLotPrice;
    private long pcf;
    private float sellingPrice;
    private int downpaymentPercent;
    private float downpayment;
    private float balancePrice;
    private int oneYrInterestPercent;
    private float oneYrInterestRate;
    private float oneYrContractPrice;
    private float oneYrPayment;
    private int twoYrInterestPercent;
    private float twoYrInterestRate;
    private float twoYrContractPrice;
    private float twoYrPayment;
    private int threeYrInterestPercent;
    private float threeYrInterestRate;
    private float threeYrContractPrice;
    private float threeYrPayment;
    private int spotCashInterestPercent;
    private float spotCashPayment;
    private int thirtyDayInterestPercent;
    private float thirtyDayPayment;
    private int sixtyDayInterestPercent;
    private float sixtyDayPayment;
}
