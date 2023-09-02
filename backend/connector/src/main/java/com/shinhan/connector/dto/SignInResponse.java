package com.shinhan.connector.dto;

import com.shinhan.connector.entity.Member;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SignInResponse {
    Integer memberNo;
    String id;
    String name;
    Integer age;
    String gender;
    String contact;
    String bankCode;
    String accountNumber;

    public static SignInResponse entityToDto(Member member) {
        return SignInResponse.builder()
                .memberNo(member.getNo())
                .id(member.getId())
                .name(member.getName())
                .age(member.getAge())
                .gender(member.getGender().getValue())
                .contact(member.getContact())
                .bankCode(member.getBankCode())
                .accountNumber(member.getAccountNumber())
                .build();
    }
}
