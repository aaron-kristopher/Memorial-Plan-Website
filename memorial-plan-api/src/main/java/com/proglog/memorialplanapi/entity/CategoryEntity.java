package com.proglog.memorialplanapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "categories")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
