MODULE Module1
    PERS tooldata tVacuum:=[TRUE,[[0,0,300],[1,0,0,0]],[1,[0,0,200],[1,0,0,0],0,0,0]];
    CONST robtarget Target_00:=[[979.489451663,0,1330.958276366],[0.675590202,0,0.737277342,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_10:=[[785,0,828.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_10_0:=[[785,0,928.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_20:=[[185,-700,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_30:=[[585,-700,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_30_0:=[[585,-700,800.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_40:=[[985,-700,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_50:=[[185,-1100,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_60:=[[585,-1100,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_70:=[[985,-1100,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_80:=[[985,1000,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_90:=[[585,1000,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_90_0:=[[585,1000,800.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_100:=[[185,1000,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_110:=[[185,600,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_120:=[[585,600,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_130:=[[985,600,198.5],[0,0,1,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    
    PERS bool SCADA_Start3;
    PERS bool SCADA_Stop3;
    PERS num Pallet_Counter := 0;
    VAR intnum Stop_Interrupt3;
    
    PROC main()
        
        IDelete Stop_Interrupt3;
        CONNECT Stop_Interrupt3 WITH Stop_Routine;
        ISignalDI Stop3, 1, Stop_Interrupt3;
        
        WHILE SCADA_Stop3 = FALSE DO
            IF Start3 = 1 OR SCADA_Start3 = TRUE THEN
                Path_10;
            ELSE
                Home;
            ENDIF
        ENDWHILE
    ENDPROC    
    
    TRAP Stop_Routine
        StopMove;  
    ENDTRAP
    
    PROC Path_10()
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Set Vaccum_Gripper3;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_20,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_30,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_40,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_50,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_60,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_30_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_70,v1000,z100,tVacuum\WObj:=wobj0;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        Pallet_Counter := Pallet_Counter + 1;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_80,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_90,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_100,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_110,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_120,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        MoveJ Target_10_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,tVacuum\WObj:=wobj0;
        Set Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_90_0,v1000,z100,tVacuum\WObj:=wobj0;
        MoveJ Target_130,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 1;
        Reset Vaccum_Gripper3;
        WaitTime 1;
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
        WaitTime 4;
        Pallet_Counter := Pallet_Counter + 1;
    ENDPROC
    
    PROC Home()
        MoveJ Target_00,v1000,z100,tVacuum\WObj:=wobj0;
    ENDPROC
ENDMODULE
