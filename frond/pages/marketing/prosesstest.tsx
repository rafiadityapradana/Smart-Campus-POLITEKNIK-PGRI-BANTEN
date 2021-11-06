import React from "react";

import Layout from "../../components/Layout";
import DndProspectivsetudent from "../../components/Dnd/DndProspectivsetudent";

import { useEffect, useState } from "react";
import {
  useProspectiveStudentsProsessUniformQuery,
  useProspectiveStudentsProsessDoneQuery,
} from "../../src/generated/graphql";
import {
  useProspectiveStudentsProsessWaitingQuery,
  useProspectiveStudentsProsessWriteQuery,
  useProspectiveStudentsProsessInterviewQuery,
} from "../../src/generated/graphql";

const Prosesstest: React.FC = () => {
  const waiting = useProspectiveStudentsProsessWaitingQuery();
  const Write = useProspectiveStudentsProsessWriteQuery();
  const Interview = useProspectiveStudentsProsessInterviewQuery();
  const Uniform = useProspectiveStudentsProsessUniformQuery();
  const Done = useProspectiveStudentsProsessDoneQuery();
  const [Loading, SetLoading] = useState(true);
  const [Fechwaiting, SetFechwaiting] = useState(
    waiting[0].data?.ProspectiveStudentsProsessWaiting
  );
  const [FechWrite, SetFechWrite] = useState(
    Write[0].data?.ProspectiveStudentsProsessWrite
  );
  const [FechInterview, SetFechInterview] = useState(
    Interview[0].data?.ProspectiveStudentsProsessInterview
  );
  const [FechUniform, SetFechUniform] = useState(
    Uniform[0].data?.ProspectiveStudentsProsessUniform
  );
  const [FechDone, SetFechDone] = useState(
    Done[0].data?.ProspectiveStudentsProsessDone
  );
  useEffect(() => {
    if (
      waiting[0].fetching &&
      Write[0].fetching &&
      Interview[0].fetching &&
      Uniform[0].fetching &&
      Done[0].fetching
    ) {
      SetLoading(true);
    } else {
      SetFechwaiting(waiting[0].data?.ProspectiveStudentsProsessWaiting!);
      SetFechWrite(Write[0].data?.ProspectiveStudentsProsessWrite!);
      SetFechInterview(Interview[0].data?.ProspectiveStudentsProsessInterview!);
      SetFechUniform(Uniform[0].data?.ProspectiveStudentsProsessUniform!);
      SetFechDone(Done[0].data?.ProspectiveStudentsProsessDone!);
      SetLoading(false);
    }
  }, [waiting, Write, Interview, Uniform, Done]);

  return (
    <Layout>
      <div className="md:m-5">
        {Loading ? (
          ""
        ) : (
          <DndProspectivsetudent
            waiting={Fechwaiting}
            Write={FechWrite}
            Interview={FechInterview}
            Uniform={FechUniform}
            Done={FechDone}
          />
        )}
      </div>
    </Layout>
  );
};
export default Prosesstest;
