MODULE Module1
    PERS tooldata Servo:=[TRUE,[[0,0,114.2],[1,0,0,0]],[0.215,[8.7,12.3,49.2],[1,0,0,0],0.00021,0.00024,0.00009]];
    CONST robtarget Target_10:=[[307.988,295.417,-1179.517],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_20:=[[307.987693328,295.417196479,-942.334776047],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_30:=[[-302.012294089,295.417183867,-942.724886706],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_40:=[[-302.012,295.417,-1090.907],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    CONST robtarget Target_00:=[[0,-0.000003881,-1008.728207824],[0,1,0,0],[0,0,0,0],[9E+09,9E+09,9E+09,9E+09,9E+09,9E+09]];
    
    PERS bool SCADA_Start2;
    PERS bool SCADA_Stop2;
    PERS num Box_Counter := 854;
    VAR intnum Stop_Interrupt2;
    
    PROC main()
        
        IDelete Stop_Interrupt2;
        CONNECT Stop_Interrupt2 WITH Stop_Routine;
        ISignalDI Stop2, 1, Stop_Interrupt2;
        
        WHILE SCADA_Stop2 = FALSE DO
            IF Start2 = 1 OR SCADA_Start2 = TRUE THEN
                Path_10;    
            ELSE
                Home;
                Box_Counter := Box_Counter + 1;
            ENDIF
        ENDWHILE
    ENDPROC
    
    TRAP Stop_Routine
        StopMove;  
    ENDTRAP
    
    PROC Path_10()
        MoveJ Target_20,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_10,v1000,z100,Servo\WObj:=wobj0;
        WaitTime 1;
        Set Servo_Gripper2;
        WaitTime 1;
        MoveJ Target_20,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_30,v1000,z100,Servo\WObj:=wobj0;
        MoveJ Target_40,v1000,z100,Servo\WObj:=wobj0;
        WaitTime 1;
        Reset Servo_Gripper2;
        MoveJ Target_30,v1000,z100,Servo\WObj:=wobj0;
        Home;
        WaitTime 5;
    ENDPROC
    
    PROC Home()
        MoveJ Target_00,v1000,z100,Servo\WObj:=wobj0;
    ENDPROC
ENDMODULE
