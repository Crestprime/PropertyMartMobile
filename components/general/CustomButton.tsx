import React from "react";
import { Pressable } from "react-native";
import CustomText from "../general/CustomText";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";

interface IProps {
  onPress: any;
  label: string;
  isLoading?: boolean;
  width: number | string;
  height?: number | string;
  isDisabled?: boolean;
}

export const PrimaryButton = ({
  onPress,
  label,
  isLoading,
  width = "100%",
  height = 44,
  isDisabled = false
}: IProps) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Pressable
        onPress={() => !isLoading && onPress()}
        style={{
          width: width as any,
          height: height as any,
          backgroundColor:
            isDisabled ? theme.colors.disabledButtonColor : theme.colors.btnBlue,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText
          variant="subheader"
          fontSize={16}
          color={'white'}
        >
          {isLoading ? "submitting..." : label}
        </CustomText>
      </Pressable>
    </>
  );
};
